# Version 2022/03/30
# test program for box drawer
# hussein suleman
# 6 april 2011

import boxes


def main():
    choice = input("Choose test:\n")
    action = choice[:1]
    if action == 'a':
        result = boxes.print_square()
        print(result)
    elif action == 'b':
        width, height = map(int, choice[2:].split(" "))
        print("calling function")
        boxes.print_rectangle(width, height)
        print("called function")
    elif action == 'c':
        width, height = map(int, choice[2:].split(" "))
        print("calling function")
        figure = boxes.get_rectangle(width, height)
        print("called function")
        print(figure)


if __name__ == '__main__':
    main()
