import random

def play_guessing_game(low, high):
    correct_answer = random.randint(low, high)
    max_attempts = 5

    for attempt in range(max_attempts):
        try:
            user_guess = int(input(f"Attempt {attempt+1}/{max_attempts}. Guess the number between {low} and {high}: "))

            if user_guess == correct_answer:
                print("You win!")
                break
            elif user_guess < correct_answer:
                print("Answer is greater.")
            else:
                print("Answer is lower.")

        except ValueError:
            print("Invalid input. Please enter a valid number.")

    else:
        print(f"You failed. The correct answer was {correct_answer}.")

if __name__ == "__main__":
    low = 1
    high = 50
    play_guessing_game(low, high)
