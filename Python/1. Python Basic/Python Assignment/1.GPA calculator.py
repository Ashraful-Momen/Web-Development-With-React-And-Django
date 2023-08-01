def calculate_gpa(grades):
    # Grading scale
    grading_scale = {
        'A+': (91, 100),
        'A': (81, 90),
        'B': (71, 80),
        'C': (61, 70),
        'D': (41, 60),
        'F': (0, 40)
    }

    total_subjects = len(grades)
    total_credit_points = 0
    total_credits = 0

    for subject, grade in grades.items():
        if grade >= 91:
            credit_points = 4.0
        elif grade >= 81:
            credit_points = 3.7
        elif grade >= 71:
            credit_points = 3.3
        elif grade >= 61:
            credit_points = 3.0
        elif grade >= 41:
            credit_points = 2.0
        else:
            credit_points = 0.0

        total_credit_points += credit_points
        total_credits += 1

    gpa = total_credit_points / total_credits
    return gpa


def main():
    subjects = ['Bangla', 'English', 'Math', 'Science']
    grades = {}

    for subject in subjects:
        try:
            grade = int(input(f"Enter the grade for {subject}: "))
            if grade < 0 or grade > 100:
                print("Invalid grade. Grade should be between 0 and 100.")
                return
            grades[subject] = grade #dictionary import value key->value
            
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            return

    gpa = calculate_gpa(grades)
    print(f"Your GPA is: {gpa:.2f}")


if __name__ == "__main__":
    main()
