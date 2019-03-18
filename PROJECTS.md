# Some Ideas for easy React Projects


## Vocabulary Trainer

Build a simple vocabulary trainer:
Provide a list of words (or sentence) from any language you want to learn and their translations.
You app will then create a card per word on the list.
On the front of the card it shows the word, on the back the translation.

If you want to test your skill, it will select a few cards.
One by one it will show you the front side of a card.
You can then click the card to see the back.
If the card is flipped, you can also select if you knew or didn’t know the translation.
The app counts the known and unknown words per run.

#### Some additional hints:

You can create the vocabulary list as a JSON file.
You app can then read this file to create the complete list.
You will need state to handle if a card is flipped or not
You also need state to count the amount of cards known and unknown
Can you also invert how the cards are shown (the translation first)?


## Memory Game

A simple game where you have to find matching tiles.
Create a game board that contains an even number of tiles.

Each tile can be flipped to reveal an image.
All images have to appear on two tiles.

During a game, the player can click a tile to reveal the image and then flip a second tile.
If both show the same image, the tiles are removed from this game.

##### Hints:

You will need to use some state:
Cards are either turned image up or not.
Cards can also be taken out of the game if the player found a pair.
You also have to count the number of open cards on the board (can only be a maximum of two).

