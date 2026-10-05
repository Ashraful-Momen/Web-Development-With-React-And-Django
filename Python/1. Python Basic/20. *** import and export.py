# ---------------------------------------------------------------------
# PYTHON IMPORT, EXPORT & PROJECT STRUCTURE - MASTER CHEAT SHEET
# ---------------------------------------------------------------------
# Core Philosophy: 
# Module -> যেকোনো একটি একক পাইথন ফাইল (.py)।
# Package -> এক বা একাধিক মডিউল সংবলিত ফোল্ডার, যাতে __init__.py থাকে।
# Absolute Import -> প্রজেক্টের রুট ফোল্ডার থেকে পুরো পাথ উল্লেখ করে ইমপোর্ট করা।
# Relative Import -> বর্তমান ফাইলের সাপেক্ষে (. বা ..) দিয়ে ইমপোর্ট করা।
# ---------------------------------------------------------------------

# =====================================================================
# 📂 1. IDEAL PYTHON PROJECT STRUCTURE (ASCII FILE TREE)
# =====================================================================
"""
my_calculator_project/            <-- Project Root Folder
│
├── main.py                       <-- Main Entry Point (কোড রান করার মূল ফাইল)
├── README.md                     <-- প্রজেক্টের ডকুমেন্টেশন
│
└── src/                          <-- Source Code Package Folder
    ├── __init__.py               <-- ফোল্ডারটিকে পাইথন প্যাকেজ হিসেবে চেনার জন্য ফাকা ফাইল
    │
    ├── basic_operations.py       <-- Module 1: সাধারণ ক্যালকুলেটর কোড
    └── advanced_operations.py    <-- Module 2: অ্যাডভান্সড ক্যালকুলেটর কোড
"""

# =====================================================================
# 📦 2. EXPORT MECHANISM (কোড অন্য ফাইলে ব্যবহারের উপযোগী করা)
# =====================================================================
# পাইথনে আলাদা কোনো 'export' কিওয়ার্ড নেই। যেকোনো ফাইল (Module)-এ ফাংশন বা ক্লাস 
# লিখলেই তা অটোমেটিক এক্সপোর্ট হয়ে যায়। তবে '__all__' দিয়ে নিয়ন্ত্রণ করা যায় কী কী এক্সপোর্ট হবে।

# 📄 src/basic_operations.py ফাইলের ভেতরের কোড:
__all__ = ['add', 'BasicCalc'] # 💡 প্রো-টিপ: 'from module import *' দিলে শুধু এগুলোই এক্সপোর্ট হবে

class BasicCalc:
    def add(self, a, b):
        return a + b

def sub(a, b): # এটি __all__ এ নেই, তাই '*' দিয়ে ইমপোর্ট করলে সরাসরি আসবে না
    return a - b


# =====================================================================
# 🚀 3. IMPORT MECHANISM (অন্য ফাইলের কোড নিজের ফাইলে আনা)
# =====================================================================

# 📄 src/advanced_operations.py ফাইলের ভেতরের কোড (মডিফাই করার লজিক):

# (A) Relative Import (একই প্যাকেজের ভেতর এক ফাইল থেকে অন্য ফাইলে ইমপোর্ট)
# '.' মানে কারেন্ট ফোল্ডার (src)
from .basic_operations import BasicCalc 

class AdvancedCalc(BasicCalc):
    def add(self, a, b):
        base_sum = super().add(a, b) # প্যারেন্টের add ফাংশন ব্যবহার
        if base_sum > 100:
            return base_sum + 10  # মডিফাইড আচরণ (বোনাস যোগ)
        return base_sum


# =====================================================================
# 🎯 4. MAIN ENTRY POINT INTEGRATION (সব একসাথে রুট ফাইলে ব্যবহার)
# =====================================================================

# 📄 main.py ফাইলের ভেতরের কোড (রুট ফোল্ডারে থাকা ফাইল):

# (B) Absolute Import (রুট থেকে স্পষ্ট পাথ দিয়ে ইমপোর্ট - বেস্ট প্র্যাকটিস)
from src.basic_operations import BasicCalc
from src.advanced_operations import AdvancedCalc

# 'as' কিওয়ার্ড দিয়ে বড় নামকে ছোট (Alias) করার ট্রিক:
import src.advanced_operations as adv

def run_application():
    normal_calculator = BasicCalc()
    smart_calculator = AdvancedCalc()
    alias_calculator = adv.AdvancedCalc() # Alias ব্যবহার
    
    print(f"Basic Sum: {normal_calculator.add(50, 20)}")     # 👉 Output: 70
    print(f"Advanced Sum: {smart_calculator.add(80, 40)}")   # 👉 Output: 130 (মডিফাইড)

# ডাইরেক্ট রান স্ক্রিপ্ট গার্ড (main.py সরাসরি রান হলেই কেবল ভেতরের কোড চলবে)
if __name__ == "__main__":
    print("🏁 Starting Calculator Application...\n")
    run_application()

# =====================================================================
# ⚠️ COMMON IMPORT ERRORS & SOLUTIONS (ইন্টারভিউ স্পেশাল)
# =====================================================================
# ১. ModuleNotFoundError: পাইথন যদি আপনার 'src' ফোল্ডার খুঁজে না পায়।
#    👉 সমাধান: সবসময় প্রজেক্টের রুট ডিরেক্টরি (my_calculator_project/) থেকে 'python main.py' রান করবেন।
# ২. ImportError: cannot import name 'X' (Circular Import)
#    👉 কারণ: ফাইল A যদি ফাইল B কে ইমপোর্ট করে, আর ফাইল B-ও যদি একই সাথে ফাইল A কে ইমপোর্ট করে।
#    👉 সমাধান: ফাংশন বা মেথডের একেবারে ভেতরে (Local Import) ইমপোর্ট স্টেটমেন্টটি লিখুন।
# ---------------------------------------------------------------------
