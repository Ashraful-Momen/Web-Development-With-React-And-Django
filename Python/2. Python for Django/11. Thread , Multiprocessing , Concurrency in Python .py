# 1. THREADING
# Useful for I/O-bound tasks (e.g., web requests, file operations)

import threading
import time

# Basic Thread Example
def print_numbers():
    for i in range(5):
        time.sleep(1)
        print(f"Number {i}")

def print_letters():
    for letter in 'ABCDE':
        time.sleep(1)
        print(f"Letter {letter}")

# Creating and starting threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

thread1.start()
thread2.start()

# Wait for threads to complete
thread1.join()
thread2.join()

# Thread with Shared Resource and Lock
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
        self.lock = threading.Lock()
    
    def withdraw(self, amount):
        with self.lock:  # Thread-safe section
            if self.balance >= amount:
                time.sleep(0.1)  # Simulate some processing
                self.balance -= amount
                return True
            return False
    
    def deposit(self, amount):
        with self.lock:  # Thread-safe section
            time.sleep(0.1)  # Simulate some processing
            self.balance += amount

# Usage Example
account = BankAccount(100)

def make_withdrawals():
    for _ in range(5):
        if account.withdraw(20):
            print(f"Withdrew 20, Balance: {account.balance}")

# Create multiple threads
threads = [threading.Thread(target=make_withdrawals) for _ in range(3)]
for thread in threads:
    thread.start()
for thread in threads:
    thread.join()

# 2. MULTIPROCESSING
# Useful for CPU-bound tasks (e.g., heavy computations)

from multiprocessing import Process, Pool, Queue, Value, Array
import os

# Basic Process Example
def process_task(name):
    print(f"Process {name}: id {os.getpid()}")
    for i in range(3):
        time.sleep(1)
        print(f"Process {name}: Step {i}")

# Create and start processes
processes = [
    Process(target=process_task, args=(f"P{i}",))
    for i in range(3)
]

for p in processes:
    p.start()
for p in processes:
    p.join()

# Process Pool Example
def calculate_square(x):
    return x * x

# Using Pool for parallel processing
with Pool(processes=4) as pool:
    numbers = [1, 2, 3, 4, 5]
    results = pool.map(calculate_square, numbers)
    print(f"Squares: {results}")

# Shared Memory between Processes
def increment_counter(counter):
    for _ in range(100):
        with counter.get_lock():
            counter.value += 1

# Create shared counter
counter = Value('i', 0)
processes = [
    Process(target=increment_counter, args=(counter,))
    for _ in range(4)
]

for p in processes:
    p.start()
for p in processes:
    p.join()

print(f"Final counter value: {counter.value}")

# 3. CONTEXT MANAGERS
# For resource management (e.g., files, connections)

# Basic Context Manager using class
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
        # Return True to suppress any exception
        return False

# Using context manager
with FileManager('test.txt', 'w') as file:
    file.write('Hello, World!')

# Context Manager using decorator
from contextlib import contextmanager

@contextmanager
def timer():
    start = time.time()
    yield  # This is where the with block's code runs
    end = time.time()
    print(f"Elapsed time: {end - start:.2f} seconds")

# Using timer context manager
with timer():
    time.sleep(1)  # Some time-consuming operation

# 4. ASYNCIO (ASYNCHRONOUS I/O)
# For concurrent I/O operations

import asyncio

# Basic async/await example
async def say_hello(name, delay):
    await asyncio.sleep(delay)  # Non-blocking sleep
    print(f"Hello, {name}!")

# Running multiple coroutines
async def main():
    # Create tasks
    task1 = asyncio.create_task(say_hello("Alice", 2))
    task2 = asyncio.create_task(say_hello("Bob", 1))
    task3 = asyncio.create_task(say_hello("Charlie", 3))
    
    # Wait for all tasks to complete
    await asyncio.gather(task1, task2, task3)

# Run the async program
asyncio.run(main())

# Real-world async example: Web Scraping
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_multiple_urls(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results

# Example usage
urls = [
    'http://example.com',
    'http://example.org',
    'http://example.net'
]

async def main_scraper():
    results = await fetch_multiple_urls(urls)
    for url, html in zip(urls, results):
        print(f"Length of {url}: {len(html)}")

# Run the async scraper
asyncio.run(main_scraper())

# 5. COMBINING APPROACHES
# Example: Producer-Consumer with Queue

from queue import Queue
from threading import Thread

def producer(queue):
    for i in range(5):
        time.sleep(1)
        queue.put(i)
        print(f"Produced: {i}")

def consumer(queue):
    while True:
        item = queue.get()
        if item is None:
            break
        print(f"Consumed: {item}")
        queue.task_done()

# Create queue and threads
queue = Queue()
prod_thread = Thread(target=producer, args=(queue,))
cons_thread = Thread(target=consumer, args=(queue,))

# Start threads
prod_thread.start()
cons_thread.start()

# Wait for producer
prod_thread.join()

# Signal consumer to exit
queue.put(None)
cons_thread.join()

# 6. THREAD POOL EXECUTOR
# For managing thread pools

from concurrent.futures import ThreadPoolExecutor

def process_item(x):
    time.sleep(1)
    return x * x

# Using thread pool
with ThreadPoolExecutor(max_workers=3) as executor:
    numbers = [1, 2, 3, 4, 5]
    results = list(executor.map(process_item, numbers))
    print(f"Results: {results}")

# 7. PROCESS POOL EXECUTOR
# For CPU-intensive parallel processing

from concurrent.futures import ProcessPoolExecutor

def heavy_computation(x):
    return sum(i * i for i in range(x))

# Using process pool
with ProcessPoolExecutor(max_workers=3) as executor:
    numbers = [1000000, 2000000, 3000000]
    results = list(executor.map(heavy_computation, numbers))
    print(f"Computation results: {results}")
