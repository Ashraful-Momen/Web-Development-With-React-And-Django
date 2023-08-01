def count_words(file_path):
    word_counts = {}
    words_list = []

    with open(file_path, 'r') as file:
        words = file.read().split()
        
        # print(words)

        for word in words:
            word = word.lower()  # Convert to lowercase for case-insensitive comparison
            # print(word)
            word_counts[word] = word_counts.get(word, 0) + 1 #*** word_count[Word]= word_count.get(thisWord,0)+1 , if get the same word then ++, either return 0.
            print(word_counts[word])
            # print(word_counts)
            if word not in words_list:
                words_list.append(word)

    return word_counts, words_list


def main():
    # Update 'file_path' with the path to your text file containing the words
    file_path = 'search_word.txt'

    word_counts, words_list = count_words(file_path)

    # Print the word counts
    for word, count in word_counts.items():
        print(f"{word} -> {count}")

    print("Words List:", words_list)


if __name__ == "__main__":
    main()


