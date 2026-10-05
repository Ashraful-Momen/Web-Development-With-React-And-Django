# ---------------------------------------------------------------------
# PYTHON OOP ARCHITECT - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Philosophy: 
# Abstraction -> 'WHAT' to do (নিয়ম বা চুক্তি তৈরি করা, জটিলতা লুকানো)।
# Encapsulation -> 'HOW' to protect (ডাটা সিকিউরিটি ও ভ্যালিডেশন)।
# Overriding -> 'HOW' to modify parent (প্যারেন্টের আচরণ পরিবর্তন করা)।
# Overloading -> 'HOW' to handle multi-inputs (ভিন্ন ইনপুট এক নামে হ্যান্ডেল করা)।
# ---------------------------------------------------------------------

from abc import ABC, abstractmethod

# =====================================================================
# 1. ABSTRACTION (কখন? যখন বাধ্যতামূলক নিয়ম বা Contract তৈরি করতে চান)
# =====================================================================
# কেন? টিমের অন্য ডেভেলপাররা যেন চাইল্ড ক্লাসে নির্দিষ্ট মেথড ইমপ্লিমেন্ট করতে বাধ্য থাকে।
# Pseudo-code: ABSTRACT CLASS Payment -> MUST IMPLEMENT process_payment()

class PaymentGateway(ABC): # আর্কিটেকচারাল রুল সেট করা
    @abstractmethod
    def process_payment(self, amount):
        pass

class Bkash(PaymentGateway):
    def process_payment(self, amount):
        # চাইল্ড ক্লাসে এই মেthod না লিখলে পাইথন অবজেক্ট তৈরি করতে দেবে না
        return f"Paid {amount} Tk via Bkash API"


# =====================================================================
# 2. METHOD OVERRIDING (কখন? যখন প্যারেন্টের আচরণ আপডেট করতে চান)
# =====================================================================
# কেন? প্যারেন্ট ক্লাসের মেথড অলরেডি আছে, কিন্তু চাইল্ড ক্লাসে আরও উন্নত আচরণ দরকার।
# Pseudo-code: User.save() -> PremiumUser.save() with HD Optimization

class User:
    def upload_avatar(self):
        return "Normal image uploaded"

class PremiumUser(User):
    def upload_avatar(self):
        # super() দিয়ে প্যারেন্টের কাজও করা হলো + এক্সট্রা লজিক যোগ করা হলো
        base_action = super().upload_avatar()
        return f"{base_action} + Upscaled to HD Quality!"


# =====================================================================
# 3. METHOD OVERLOADING (কখন? যখন এক নামে ভিন্ন ইনপুট হ্যান্ডেল করতে চান)
# =====================================================================
# কেন? একই ফাংশন বিভিন্ন সংখ্যক বা ভিন্ন টাইপের আর্গুমেন্ট নিয়ে কাজ করবে।
# Pseudo-code: Search(query) OR Search(query, location)

class SearchEngine:
    # পাইথনে সরাসরি এক নামে দুটি মেথড লেখা যায় না, তাই Default Value (None) ট্রিক:
    def search(self, query, location=None):
        if location:
            return f"Searching for '{query}' inside '{location}'"
        return f"Searching globally for '{query}'"

se = SearchEngine()
# print(se.search("Python"))          # 👉 ইনপুট ১টি
# print(se.search("Python", "Dhaka")) # 👉 ইনপুট ২টি


# =====================================================================
# 4. ACCESS MODIFIERS (কখন? যখন ডাটা গার্ড বা সিকিউরিটি দিতে চান)
# =====================================================================
# Public    (name)   -> সবার জন্য উন্মুক্ত। যে কেউ রিড/রাইট করতে পারে।
# Protected (_name)  -> শুধু এই ক্লাস এবং এর চাইল্ড (Inherited) ক্লাস ব্যবহার করবে।
# Private   (__name) -> অতি সংবেদনশীল ডেটা। ক্লাসের বাইরে সরাসরি অ্যাক্সেস সম্পূর্ণ ব্লক।

class SystemUser:
    def __init__(self, username, email, password):
        self.username = username      # Public
        self._email = email           # Protected (চাইল্ড ক্লাসের ব্যবহারের জন্য)
        self.__password = password    # Private (বাহির থেকে দেখা বা পরিবর্তন অসম্ভব)

    # প্রাইভেট ডেটা সিকিউর উপায়ে মডিফাই করার জন্য মেথড (Setter-like)
    def update_password(self, old_pass, new_pass):
        if old_pass == self.__password:
            self.__password = new_pass
            return "Password updated securely."
        return "Authentication failed!"


# =====================================================================
# 🎯 QUICK ARCHITECTURAL DECISION MATRIX (কোনটা কোথায় লাগাবেন)
# =====================================================================
# ⚡ প্রজেক্টের স্ট্রাকচার/রুলস সেট করতে? -> Abstraction (ABC) ব্যবহার করুন।
# ⚡ ডুপ্লিকেট কোড কমাতে ও রিইউজ করতে? -> Inheritance (প্যারেন্ট-চাইল্ড) ব্যবহার করুন।
# ⚡ ভুল ইনপুট বা হ্যাকিং থেকে ডেটা বাঁচাতে? -> Encapsulation (Private & Properties) ব্যবহার করুন।
# ⚡ একই অ্যাকশনের বহুমাত্রিক রূপ দিতে?   -> Polymorphism (Overriding/Overloading) ব্যবহার করুন।
# ---------------------------------------------------------------------
