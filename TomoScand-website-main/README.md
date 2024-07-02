# TomoScand-website

A small explanation of how I've written the TomoScand website's codes.



STRUCTURE Of THE WEBSITE

The website consists of 6 pages:

- Front page (accessed via the TomoScand title)
- Project
- Data
- Articles
- Contact

The front page acts as an advertisement for the project. There is a big beautiful picture on the banner, a descriptive sentence on top of it that sounds cool,
and a small paragraph decribing what we do. The actual content of this page just explains further what the banner paragraph is saying.

The Project page explains in more detail what TomoScand is about. There's also a bunch of links to all the organisations included in this project.
There are some nice pictures too to keep the content interesting.

The Data page explains how data is collected and how it's used and analysed. A lot of cool pictures and animations are also included.

The Articles page is where you find related articles to this project.

The Contact page is where you find, well, all the contact info. Preferably with pictures of the corresponding people.

Each page has its own html file and css file. There should also be a folder called 'pictures' that holds, surprisingly enough, all the pictures used on the website.
The banner pictures should be moved to the same folder where the code files are but the rest of the pictures can remain the original folder.
The website follows FMI's theme colours and it should stay that way. The backround of the pages should remain white for accessibility reasons.




STRUCTURE OF THE PAGES

The content pages are all constructed in the similar way. The front page is a little different but still follows the same structure. 
All pages are divided into four sections (from top to bottom):

- Header & navigation
- Banner
- Container (content)
- Footer

Header & navigation consists of the FMI logo and links to all the pages. The links are in a list form.

The banner consists of a beautiful picture of a device that probably has something to do with the project. It may also include a small
title/paragraph about the page's content. By default, however, it does not, so if you want to add one you have to go un comment something in the html file.
The picture is set as a backround for the element and the possible text box is floating as its own element on top of it.

The container is usually divided into two columns, column 1 is on the left side. The columns are inside a 'container' to make sure that the are centered,
equally wide, and responsive sizewise. The content inside the column is stacked up with a break between each content element.

Lastly, the footer is its own element and its content is in a list form. There is a 'main list' with three components. The first two are the contact components
and they both have a nested list with 5 components. The main list components are arranged in a row and the nested lists as columns. This makes the footer
responsive and easy to edit.

The font size on each page is responsive and so are all the elements. The margins on the content sections are 8vw horizontally and 5vw vertically. Margins between
elements are usually 2vw but it varies between 1-3vw.




STRUCTURE OF INDIVIDUAL PAGES EXPLAINED

  THE FRONT PAGE
  
  The front page's banner differsfrom those of the rest. The banner is its own element that consist of two columns. The left one fills 75% of the width and
  it has a cool picture as a background with two header elements as the actual 'content'. The right side column fills the rest of the banner with a dark
  blue-purple colour and it has a header and a paragraph as the actual content. The backgound on the whole banner element is black and it beacomes visible when
  resizing the window.
  
  THE PROJECT PAGE
  
  The Related links section consists of a main list and nested lists much like the footer. The main list is in a column form and the nested lists are
  in a row form, and it consists of the links. So each main list item has a nested list of 1+ related links.
  
  THE DATA PAGE
  
  The container in data page actually has three elements: the first one consists of two columns and the content explaines the data, the second one
  is a plain box that is (hopefully) to be filled with an animation or a dynamic plot. The last one Consists of two columns that each have a main list and
  nested lists. 
  
  THE ARTICLES PAGE
  
  Same structure as with the third element on the data page: two columns, each with a main list with elements taht each have a nested list.
  
  THE CONTACT PAGE
  
  First there is a header element. Then comes three elements, all called 'columns', and each of those has two columns. The first column has a main list and nested 
  lists (contact info) and the second one consists of the picture. This structure is repeated once, the comes another header as its own element and then the same
  columns-lists-nested lists structure once more. So each 'columns' element is reserved for one person.
  
  

WHAT TO DEVELOP

- The header isn't entirely responsive. This could be fixed with a hamburger menu.
- logos could act as links to websites
- hovering over links could be improved




Thanks for reading, I'll finish my last day here now :) Byeeeeeeeee

- Mara Virtanen, 1.9.2022
