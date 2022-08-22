print('Welcome to the quiz.')
correct = 0
question_one_answer = 2
question_two_answer = 4
question_three_answer = 6
playing = input('Would you like to play? (Y) or (N) ')
if playing.upper() == 'Y':
    print('Don\'t mess this up!')
else:
    quit()
question_one_choice = int(input('What\'s 1 + 1? '))
if question_one_choice == question_one_answer:
    correct += 1
else:
    print('there\'s no way')
question_two_choice = int(input('What\'s 2 + 2? '))
if question_two_choice == question_two_answer:
    correct += 1
else:
    print('come on')
question_three_choice = int(input('What\'s 3 + 3? '))
if question_three_choice == question_three_answer:
    correct += 1
else:
    print('wow')
print(f'You got a {correct}/3')