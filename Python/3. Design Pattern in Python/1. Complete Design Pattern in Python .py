# 1. SINGLETON PATTERN
# Real-world example: Database Connection
class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connection = "Connected to MySQL"
        return cls._instance
    
    def query(self, sql):
        return f"Running query: {sql}"

# Usage Example:
db1 = Database()
db2 = Database()  # Returns the same instance as db1
print(db1.query("SELECT * FROM users"))
print(db1 is db2)  # True - same instance

# -------------------------------

# 2. FACTORY PATTERN
# Real-world example: Social Media Post Creator
from abc import ABC, abstractmethod

# Step 1: Create abstract base class for all posts
class SocialMediaPost(ABC):
    @abstractmethod
    def create(self):
        pass

# Step 2: Create concrete classes for different types of posts
class FacebookPost(SocialMediaPost):
    def create(self):
        return "Created a Facebook post"

class TwitterPost(SocialMediaPost):
    def create(self):
        return "Created a Tweet"

# Step 3: Create the factory class
class SocialMediaFactory:
    def create_post(self, post_type):
        if post_type == "facebook":
            return FacebookPost()
        elif post_type == "twitter":
            return TwitterPost()
        else:
            raise ValueError("Invalid post type")

# Usage Example:
factory = SocialMediaFactory()
facebook_post = factory.create_post("facebook")
print(facebook_post.create())

# -------------------------------

# 3. BUILDER PATTERN
# Real-world example: Pizza Order System
class Pizza:
    def __init__(self):
        self.size = None
        self.cheese = None
        self.toppings = []

class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()
    
    def set_size(self, size):
        self.pizza.size = size
        return self  # For method chaining
    
    def add_cheese(self, cheese):
        self.pizza.cheese = cheese
        return self
    
    def add_topping(self, topping):
        self.pizza.toppings.append(topping)
        return self
    
    def build(self):
        return self.pizza

# Usage Example:
pizza = (PizzaBuilder()
         .set_size("large")
         .add_cheese("mozzarella")
         .add_topping("mushrooms")
         .add_topping("pepperoni")
         .build())

# -------------------------------

# 4. ADAPTER PATTERN
# Real-world example: Payment System Integration

# Old payment system
class OldPaymentSystem:
    def process_payment(self, amount):
        return f"Processing payment of {amount} using old system"

# New payment interface
class NewPaymentInterface(ABC):
    @abstractmethod
    def process_new_payment(self, amount, currency):
        pass

# Adapter to make old system work with new interface
class PaymentAdapter(NewPaymentInterface):
    def __init__(self, old_system):
        self.old_system = old_system
    
    def process_new_payment(self, amount, currency):
        converted_amount = self._convert_currency(amount, currency)
        return self.old_system.process_payment(converted_amount)
    
    def _convert_currency(self, amount, currency):
        # Simple conversion example
        return amount * 1.1

# Usage Example:
old_system = OldPaymentSystem()
adapter = PaymentAdapter(old_system)
print(adapter.process_new_payment(100, "USD"))

# -------------------------------

# 5. OBSERVER PATTERN
# Real-world example: Newsletter System

# Step 1: Create observer interface
class Subscriber(ABC):
    @abstractmethod
    def update(self, message):
        pass

# Step 2: Create concrete subscriber
class EmailSubscriber(Subscriber):
    def __init__(self, email):
        self.email = email
    
    def update(self, message):
        return f"Sending email to {self.email}: {message}"

# Step 3: Create newsletter class
class Newsletter:
    def __init__(self):
        self.subscribers = []
    
    def subscribe(self, subscriber):
        self.subscribers.append(subscriber)
    
    def notify(self, message):
        for subscriber in self.subscribers:
            print(subscriber.update(message))

# Usage Example:
newsletter = Newsletter()
subscriber1 = EmailSubscriber("user1@example.com")
subscriber2 = EmailSubscriber("user2@example.com")

newsletter.subscribe(subscriber1)
newsletter.subscribe(subscriber2)
newsletter.notify("New article published!")

# -------------------------------

# 6. STRATEGY PATTERN
# Real-world example: Shipping Calculator

# Step 1: Create strategy interface
class ShippingStrategy(ABC):
    @abstractmethod
    def calculate(self, package):
        pass

# Step 2: Create concrete strategies
class FedExStrategy(ShippingStrategy):
    def calculate(self, package):
        return "FedEx shipping cost: $25"

class UPSStrategy(ShippingStrategy):
    def calculate(self, package):
        return "UPS shipping cost: $20"

# Step 3: Create context class
class ShippingCalculator:
    def __init__(self):
        self.strategy = None
    
    def set_strategy(self, strategy):
        self.strategy = strategy
    
    def calculate(self, package):
        if self.strategy:
            return self.strategy.calculate(package)
        raise ValueError("No strategy set")

# Usage Example:
calculator = ShippingCalculator()
calculator.set_strategy(FedExStrategy())
print(calculator.calculate("My Package"))

# -------------------------------

# 7. CHAIN OF RESPONSIBILITY
# Real-world example: Support Ticket System

class SupportHandler(ABC):
    def __init__(self):
        self.next_handler = None
    
    def set_next(self, handler):
        self.next_handler = handler
        return handler
    
    @abstractmethod
    def handle(self, ticket):
        if self.next_handler:
            return self.next_handler.handle(ticket)
        return None

class TechnicalSupport(SupportHandler):
    def handle(self, ticket):
        if ticket['type'] == 'technical':
            return "Technical support handling ticket"
        return super().handle(ticket)

class BillingSupport(SupportHandler):
    def handle(self, ticket):
        if ticket['type'] == 'billing':
            return "Billing support handling ticket"
        return super().handle(ticket)

# Usage Example:
technical = TechnicalSupport()
billing = BillingSupport()

technical.set_next(billing)

ticket = {'type': 'technical'}
print(technical.handle(ticket))
