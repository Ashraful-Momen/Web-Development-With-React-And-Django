# ---------------------------------------------------------------------
# PYTHON CONCURRENCY (SYNC, THREADING, ASYNC) - EASY MASTER NOTE
# ---------------------------------------------------------------------
# সহজ বাংলায় মূল পার্থক্য:
# ১. Sync: ১ নম্বর চা বানানো শেষ করে, ২ নম্বর বানাবে, তারপর ৩ নম্বর। (অনেক সময় লাগবে)
# ২. Threading: ৩ জন মানুষ একসাথে ৩টি আলাদা কেটলিতে ৩টি চা বানাবে। (তাড়াতাড়ি হবে, মেমরি বেশি লাগবে)
# ৩. Async: ১ জন মানুষই কেটলিতে পানি দিয়ে বসে না থেকে, অন্য কাপ রেডি করবে। (সবচেয়ে স্মার্ট ও ফাস্ট)
# ---------------------------------------------------------------------

import time
import asyncio
from concurrent.futures import ThreadPoolExecutor

# =====================================================================
# ❌ ১. SYNCHRONOUS VERSION (সাধারণ এবং ব্লকিং পদ্ধতি)
# =====================================================================
# এখানে প্রতিবার `time.sleep(2)` হওয়ার সময় পুরো কোড একদম স্তব্ধ বা ব্লক হয়ে থাকে।

def make_tea_sync(cup_number):
    print(f"☕ [Sync] {cup_number} নম্বর কাপে পানি গরম করা শুরু হলো...")
    time.sleep(2) # কেটলি গরম হওয়া পর্যন্ত পুরো কোড এখানে ২ সেকেন্ড আটকে থাকবে
    print(f"✅ [Sync] {cup_number} নম্বর কাপ চা রেডি!")
    return f"Cup {cup_number}"

def run_synchronous():
    start_time = time.time()
    
    # লুপ ঘুরিয়ে ১টি করে ৩টি চা বানানো হচ্ছে
    for i in range(1, 4):
        make_tea_sync(i)
        
    end_time = time.time()
    print(f"⏱️ Sync পদ্ধতিতে মোট সময় লাগলো: {end_time - start_time:.2f} সেকেন্ড\n")


# =====================================================================
# ⚡ ২. MULTI-THREADING VERSION (সমান্তরাল বা প্যারালাল পদ্ধতি)
# =====================================================================
# এখানে `ThreadPoolExecutor` ব্যাকহ্যান্ডে ৩টি আলাদা 'থ্রেড' বা সহকারী তৈরি করবে।
# তারা ৩ জনে একসাথে ৩টি কাপের পানি গরম করার কাজ সমান্তরালে শুরু করে দেবে।

def make_tea_thread(cup_number):
    print(f"🔥 [Thread] {cup_number} নম্বর কাপে পানি গরম করা শুরু হলো...")
    time.sleep(2) # থ্রেড আলাদা হওয়ায় একটি আটকে থাকলেও অন্য থ্রেড সচল থাকে
    print(f"✅ [Thread] {cup_number} নম্বর কাপ চা রেডি!")
    return f"Cup {cup_number}"

def run_threading():
    start_time = time.time()
    
    # max_workers=3 মানে ৩টি সহকারী বা থ্রেড একসাথে কাজে নামবে
    with ThreadPoolExecutor(max_workers=3) as executor:
        cups = [1, 2, 3]
        # executor.map নিজে থেকেই ৩টি আইটেমকে ৩টি থ্রেডে ভাগ করে দেয়
        list(executor.map(make_tea_thread, cups))
        
    end_time = time.time()
    print(f"⏱️ Threading পদ্ধতিতে মোট সময় লাগলো: {end_time - start_time:.2f} সেকেন্ড\n")


# =====================================================================
# 🚀 ৩. ASYNCHRONOUS VERSION (স্মার্ট নন-ব্লকিং পদ্ধতি)
# =====================================================================
# এখানে কোনো সহকারী থাকবে না (সিঙ্গেল থ্রেড)। কিন্তু `await` কিওয়ার্ডের কারণে 
# যখনই ১ নম্বর কেটলি গরম হতে থাকবে, পাইথন বসে না থেকে ২ নম্বর কেটলির সুইচ অন করবে।

async def make_tea_async(cup_number):
    print(f"⚡ [Async] {cup_number} নম্বর কাপে পানি গরম করা শুরু হলো...")
    
    # ⚠️ মনে রাখুন: async এর ভেতর time.sleep() দিলে কাজ করবে না, asyncio.sleep() দিতে হবে।
    # 'await' মানে পাইথনকে বলা: "এখানে ২ সেকেন্ড সময় লাগবে, তুমি এই ফাঁকে অন্য কাজ করো।"
    await asyncio.sleep(2) 
    
    print(f"✅ [Async] {cup_number} নম্বর কাপ চা রেডি!")
    return f"Cup {cup_number}"

async def run_asynchronous():
    start_time = time.time()
    
    # ৩টি কাজের একটি তালিকা বা টাস্ক লিস্ট বানালাম
    tasks = [make_tea_async(1), make_tea_async(2), make_tea_async(3)]
    
    # asyncio.gather দিয়ে সব টাস্ক একসাথে রান করিয়ে দেওয়া হলো
    await asyncio.gather(*tasks)
    
    end_time = time.time()
    print(f"⏱️ Async পদ্ধতিতে মোট সময় লাগলো: {end_time - start_time:.2f} সেকেন্ড\n")


# =====================================================================
# 🏁 ৪. অ্যাপ্লিকেশন এন্ট্রি পয়েন্ট (কোড রান করার নিয়ম)
# =====================================================================
if __name__ == "__main__":
    
    print("--- 🔴 ১. সিনক্রোনাস লুপ শুরু হচ্ছে ---")
    run_synchronous() # ৩টি চা বানাতে ২ + ২ + ২ = ৬ সেকেন্ড লাগবে
    
    print("--- 🔵 ২. মাল্টি-থ্রেডিং শুরু হচ্ছে ---")
    run_threading() # ৩ জন একসাথে করায় মাত্র ২ সেকেন্ডের কাছাকাছি লাগবে
    
    print("--- 🟢 ৩. অ্যাসিনক্রোনাস শুরু হচ্ছে ---")
    # পাইথনে অ্যাসিনক্রোনাস ফাংশন সরাসরি কল করা যায় না, asyncio.run() লাগে
    asyncio.run(run_asynchronous()) # ১ জনই বুদ্ধি খাটিয়ে করায় মাত্র ২ সেকেন্ড লাগবে!

# ---------------------------------------------------------------------





# =============================================================================================

# ---------------------------------------------------------------------
# PYTHON ASYNC, SYNC & THREADING - MASTER CHEAT SHEET
# ---------------------------------------------------------------------
# Core Philosophy:
# Sync (Blocking): একটি কাজ সম্পূর্ণ শেষ হওয়ার পর পরবর্তী কাজ শুরু হয়।
# Threading (Multi-thread): একাধিক থ্রেড বা সমান্তরাল লাইনে একই সাথে কাজ চলে (I/O-Bound এর জন্য)।
# Async (Non-blocking): একক থ্রেডে `await` এর সময় পজ হয়ে অন্য কাজকে সুযোগ দেয়।
# ---------------------------------------------------------------------

import time
import asyncio
import aiofiles  # 💡 নোট: এসিনক্রোনাস ফাইল হ্যান্ডেলিংয়ের লাইব্রেরি
import aiohttp
import requests
from concurrent.futures import ThreadPoolExecutor

URLS = ['http://example.com', 'http://example.org', 'http://example.net']

# =====================================================================
# 🛠️ 1. THE THREE PILLARS COMPARISON (একই কাজ ৩ ভাবে করার নিয়ম)
# =====================================================================
# লক্ষ্য: ৩টি ভিন্ন ওয়েবসাইট ডাউনলোড করে তাদের টেক্সটের সাইজ বের করা।

# (A) Synchronous Version (টাইম নষ্ট ❌ - প্রতিটি রিকোয়েস্টে লুপ ব্লক হবে)
def sync_download_all():
    results = []
    for url in URLS:
        response = requests.get(url) # ব্লকড! রেসপন্স না আসা পর্যন্ত কোড থামবে
        results.append(len(response.text))
    return results

# (B) Threading Version (সমান্তরাল ⚡ - আলাদা থ্রেডে রিকোয়েস্ট যাবে)
def threaded_download_all():
    def fetch_size(url):
        return len(requests.get(url).text)
    
    # max_workers=3 মানে ৩টি থ্রেড একসাথে ৩টি ইউআরএল হিট করবে
    with ThreadPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(fetch_size, URLS))
    return results

# (C) Asynchronous Version (স্মার্ট ও ফাস্ট 🚀 - সিঙ্গেল থ্রেড নন-ব্লকিং)
async def async_download_all():
    async with aiohttp.ClientSession() as session:
        async def fetch_size(url):
            async with session.get(url) as response:
                text = await response.text() # ডেটা আসার সময় লুপটি অন্য কাজ করবে
                return len(text)
        
        # টাস্ক লিস্ট তৈরি করে asyncio.gather দিয়ে সব একসাথে পুশ করা
        tasks = [fetch_size(url) for url in URLS]
        return await asyncio.gather(*tasks)


# =====================================================================
# 📂 2. ASYNC I/O OPERATIONS (ফাইল ও ডাটাবেজ প্রসেসিং)
# =====================================================================

# (A) Async File Pipeline (একসাথে অনেক ফাইল রিড-রাইট করা)
async def async_process_files(file_list):
    async def process_file(filename):
        # সাধারণ open() ব্লক করে, তাই async with aiofiles.open() ব্যবহার করতে হয়
        async with aiofiles.open(filename, 'r') as f:
            content = await f.read()
            return content.upper()
    
    tasks = [process_file(name) for name in file_list]
    return await asyncio.gather(*tasks)

# (B) Async Database Mock (ডাটাবেজ কুয়েরি সিমুলেশন)
class AsyncDatabaseOps:
    async def get_user(self, user_id):
        # time.sleep() দিলে অ্যাসিনক্রোনাস কাজ করে না, asyncio.sleep() দিতে হবে
        await asyncio.sleep(1) 
        return {'id': user_id, 'name': f'User {user_id}'}
    
    async def get_multiple_users(self, user_ids):
        tasks = [self.get_user(uid) for uid in user_ids]
        return await asyncio.gather(*tasks)


# =====================================================================
# 🏁 3. EXECUTION & APP ENTRY POINT (কোড রান করার আসল নিয়ম)
# =====================================================================
if __name__ == "__main__":
    
    # --- সিনক্রোনাস রান ---
    start = time.time()
    sync_res = sync_download_all()
    print(f"⏱️ Sync Execution Time: {time.time() - start:.2f} seconds")
    
    # --- থ্রেডিং রান ---
    start = time.time()
    thread_res = threaded_download_all()
    print(f"⏱️ Threading Execution Time: {time.time() - start:.2f} seconds")

    # --- এসিনক্রোনাস রান ---
    start = time.time()
    # পাইথনে এসিনক্রোনাস কোডকে মেইন থ্রেডে ট্রিগার করতে asyncio.run() লাগে
    async_res = asyncio.run(async_download_all())
    print(f"⏱️ Async Execution Time: {time.time() - start:.2f} seconds")

# =====================================================================
# 🎯 ARCHITECTURAL DECISION MATRIX (কখন কোনটা ব্যবহার করবেন?)
# =====================================================================
# ⚡ Network/Web Scraping (I/O-Bound)? -> Asyncio (aiohttp) বেস্ট। কম খরচে হিউজ স্পীড।
# ⚡ Heavy Math/Image Processing (CPU-Bound)? -> Threading/Multiprocessing বেস্ট।
# ⚡ Simple Local Script? -> Standard Sync (Requests) ব্যবহার করাই যথেষ্ট।
# ---------------------------------------------------------------------
