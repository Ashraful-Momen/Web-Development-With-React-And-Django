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
