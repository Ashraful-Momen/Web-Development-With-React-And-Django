# ---------------------------------------------------------------------
# PYTHON ENUMERATE() FUNCTION - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts: 
# enumerate(): লুপের ভেতর আইটেমের সাথে তার ইনডেক্স (index) ট্র্যাক করার জন্য ব্যবহৃত হয়।
# start=1: ইনডেক্স ০ এর বদলে ১ (বা যেকোনো সংখ্যা) থেকে শুরু করার প্যারামিটার।
# Pythonic Way: ম্যানুয়ালি index += 1 না করে enumerate() ব্যবহার করাই পাইথনের স্ট্যান্ডার্ড নিয়ম।
# Fact Check: JS-এর map/filter/reduce এর অল্টারনেটিভ এটি নয় এবং একে Linter বলা ভুল (Linter কোড ভুল ধরে)।
# ---------------------------------------------------------------------

# 1. Manual Indexing (ম্যানুয়াল পদ্ধতি - যা এড়িয়ে চলা উচিত)
# আলাদা ভ্যারিয়েবল নিয়ে লুপের শেষে প্রতিবার ইনডেক্স ১ করে বাড়াতে হয়।
marks = [12, 56, 32, 98, 12, 45, 1, 4]
index = 0
for mark in marks:
    print(mark)
    if index == 3:
        print("Harry, awesome!")
    index += 1

# 2. Basic Enumerate (Default Index 0)
# কোনো start ভ্যালু না দিলে ইনডেক্স সবসময় ০ থেকে শুরু হয়।
names = ["Alice", "Bob", "Charlie"]
for index, name in enumerate(names):
    print(f"Index: {index}, Name: {name}")
    # 👉 Output: Index: 0, Name: Alice ...

# 3. Enumerate with Custom Start (start=1)
# বাস্তব জীবনের বা সিরিয়াল নাম্বারের হিসাবের জন্য start=1 ব্যবহার করা হয়।
marks = [12, 56, 32, 98, 12, 45, 1, 4]
for index, mark in enumerate(marks, start=1):
    print(mark)
    if index == 3: # ৩ নম্বর উপাদান (32) প্রিন্ট হওয়ার পর কন্ডিশন মিলবে
        print("Harry, awesome!")

# 4. Converting to List of Tuples (টাপলের লিস্ট তৈরি করা)
# লুপ ছাড়া সরাসরি ইনডেক্সসহ ডেটা দেখতে চাইলে list() দিয়ে কনভার্ট করা যায়।
fruits = ["Apple", "Mango", "Banana"]
indexed_fruits = list(enumerate(fruits, start=1))
print(indexed_fruits)
# 👉 Output: [(1, 'Apple'), (2, 'Mango'), (3, 'Banana')]

# 5. Comparing with JavaScript Concept
# JavaScript-এ index পাওয়ার জন্য আমরা (.map) বা (.forEach) এর কলব্যাক ব্যবহার করি:
# JS: marks.forEach((mark, index) => { ... })
# Python Alternative: for index, mark in enumerate(marks):
# ---------------------------------------------------------------------








# --------------------------------------------------------------------
'''
in JS we use key for squence => map , filter or reduce but in by thon alternative we use it. Enumeret also call as linter.
'''


marks = [12, 56, 32, 98, 12,  45, 1, 4]

# index = 0
# for mark in marks:
#   print(mark)
#   if(index == 3):
#     print("Harry, awesome!")
#   index +=1

for index, mark in enumerate(marks, start=1):
  print(mark)
  if(index == 3):
    print("Harry, awesome!")
