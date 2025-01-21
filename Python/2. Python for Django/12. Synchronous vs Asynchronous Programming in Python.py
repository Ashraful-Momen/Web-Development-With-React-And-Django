# 1. SYNCHRONOUS PROGRAMMING
# Operations are performed one after another in sequence

import time
import requests
import threading
import asyncio
import aiohttp
from concurrent.futures import ThreadPoolExecutor

# Example 1: Synchronous File Operations
def sync_read_file():
    print("Starting file operations...")
    
    # Reading file synchronously
    with open('test.txt', 'w') as f:
        f.write('Hello, World!')
    
    with open('test.txt', 'r') as f:
        content = f.read()
        print(f"File content: {content}")
    
    print("File operations completed")

# Example 2: Synchronous Web Requests
def sync_get_website(url):
    print(f"Getting {url}")
    response = requests.get(url)
    return f"Got {url} with status {response.status_code}, length {len(response.text)}"

def sync_get_multiple_sites():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    
    results = []
    for url in urls:
        result = sync_get_website(url)
        results.append(result)
    
    return results

# Example 3: Synchronous Data Processing
def sync_process_data(data):
    print("Processing data...")
    result = []
    for item in data:
        # Simulate processing time
        time.sleep(1)
        result.append(item * 2)
    return result

# 2. ASYNCHRONOUS PROGRAMMING
# Operations can be paused and resumed, allowing other operations to run

# Example 1: Asynchronous File Operations
async def async_read_file():
    print("Starting async file operations...")
    
    # Simulate async file operations
    async with aiofiles.open('test.txt', 'w') as f:
        await f.write('Hello, World!')
    
    async with aiofiles.open('test.txt', 'r') as f:
        content = await f.read()
        print(f"File content: {content}")
    
    print("Async file operations completed")

# Example 2: Asynchronous Web Requests
async def async_get_website(session, url):
    print(f"Getting {url}")
    async with session.get(url) as response:
        text = await response.text()
        return f"Got {url} with status {response.status}, length {len(text)}"

async def async_get_multiple_sites():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    
    async with aiohttp.ClientSession() as session:
        tasks = [async_get_website(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
    
    return results

# Example 3: Asynchronous Data Processing
async def async_process_item(item):
    await asyncio.sleep(1)  # Simulate processing time
    return item * 2

async def async_process_data(data):
    print("Processing data asynchronously...")
    tasks = [async_process_item(item) for item in data]
    results = await asyncio.gather(*tasks)
    return results

# 3. MIXING SYNC AND ASYNC
# Example of handling both synchronous and asynchronous code

# Callback-based approach
def process_result_callback(result):
    print(f"Processed result: {result}")

class DataProcessor:
    def __init__(self):
        self.callbacks = []
    
    def add_callback(self, callback):
        self.callbacks.append(callback)
    
    def process_data(self, data):
        result = data * 2
        for callback in self.callbacks:
            callback(result)

# 4. COMPARISON EXAMPLES
# Same task implemented in different ways

# Task: Download multiple URLs and process their content

# Synchronous Version
def sync_download_all():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    
    results = []
    for url in urls:
        # Synchronous blocking calls
        response = requests.get(url)
        results.append(len(response.text))
    
    return results

# Threading Version
def threaded_download_all():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    
    def download_url(url):
        response = requests.get(url)
        return len(response.text)
    
    with ThreadPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(download_url, urls))
    
    return results

# Asynchronous Version
async def async_download_all():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    
    async with aiohttp.ClientSession() as session:
        async def fetch_url(url):
            async with session.get(url) as response:
                text = await response.text()
                return len(text)
        
        tasks = [fetch_url(url) for url in urls]
        results = await asyncio.gather(*tasks)
    
    return results

# 5. PRACTICAL EXAMPLES

# Example 1: Database Operations
class SyncDatabaseOps:
    def get_user(self, user_id):
        # Simulate DB query
        time.sleep(1)
        return {'id': user_id, 'name': f'User {user_id}'}
    
    def get_multiple_users(self, user_ids):
        return [self.get_user(uid) for uid in user_ids]

class AsyncDatabaseOps:
    async def get_user(self, user_id):
        # Simulate async DB query
        await asyncio.sleep(1)
        return {'id': user_id, 'name': f'User {user_id}'}
    
    async def get_multiple_users(self, user_ids):
        tasks = [self.get_user(uid) for uid in user_ids]
        return await asyncio.gather(*tasks)

# Example 2: File Processing Pipeline

# Synchronous Pipeline
def sync_process_files(file_list):
    results = []
    for filename in file_list:
        with open(filename, 'r') as f:
            content = f.read()
            # Process content
            processed = content.upper()
            results.append(processed)
    return results

# Asynchronous Pipeline
async def async_process_files(file_list):
    async def process_file(filename):
        async with aiofiles.open(filename, 'r') as f:
            content = await f.read()
            # Process content
            processed = content.upper()
            return processed
    
    tasks = [process_file(filename) for filename in file_list]
    return await asyncio.gather(*tasks)

# Usage Examples:

# 1. Sync vs Async Web Requests
def main_sync():
    start = time.time()
    results = sync_get_multiple_sites()
    end = time.time()
    print(f"Sync execution time: {end - start:.2f} seconds")
    return results

async def main_async():
    start = time.time()
    results = await async_get_multiple_sites()
    end = time.time()
    print(f"Async execution time: {end - start:.2f} seconds")
    return results

# Run synchronous version
sync_results = main_sync()

# Run asynchronous version
async_results = asyncio.run(main_async())

# 2. Sync vs Async Data Processing
data = [1, 2, 3, 4, 5]

# Synchronous
sync_results = sync_process_data(data)

# Asynchronous
async_results = asyncio.run(async_process_data(data))
