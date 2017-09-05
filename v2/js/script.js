
$(document).ready(function(){
    var open = false;
    var eduuc = ["University of Chicago", "Education |", "College |", "September 2015 - June 2019 |", "GPA: 3.75/4.00", "I am currently a sophomore at the University of Chicago, where I plan on pursuing a Bachelors degree in both Computer Science and Statistics. I am also a member of UChicago's all-male A Capella group <a class = 'blandlink' href='https://www.facebook.com/UChicagoRunforCover/'>Run For Cover</a> - you can find us on Spotify, iTunes, and Loudr."];

    var edusa = ["Sewickley Academy", "Education |", "High School |", "September 2011 - June 2015 |", "GPA: 3.91/4.00 | SAT: 2360 | ACT: 35", "I attended Sewickley Academy High School, located in Sewickley, PA. I graduated as a member of the cum laude society, as well as with highest honors. I was president of the Speech and Debate, Mock Trial, Programming, and Quiz Bowl teams, and I received a total of more than ten awards over the course of the four years that I attended the school. These were: the <strong>Benjamin Thomas Memorial Forensic Award</strong> (given to the student who demonstrates the most passion for speech and debate), the <strong>Computer Science Award</strong> (given to the student who demonstrates that he or she is most proficient in the field of computer science), the <strong>Outstanding Physics Student Award</strong>, the <strong>Math Award</strong>, the <strong>Science Award</strong>, and the <strong>Tuck McClintock Community Service Award</strong> (given to the student who has contributed the most service to his/her communities). I was also an <strong>AP Scholar</strong>, an <strong>AP Scholar with Distinction</strong>, and a <strong>National AP Scholar</strong>."];
    
    var educmu = ["Carnegie Mellon University", "Education |", "Pre-College |", "September 2011 - June 2014 |", "GPA: 3.5", "I took several pre-college courses at CMU the summers after my freshman, sophomore, and junior years of high school. I took <strong>Modern Biology</strong>, <strong>Modern Biology Lab</strong>, <strong>Calculus I</strong> and <strong>Chemistry II</strong>. In addition, I also attended <strong>Leap@CMU</strong>, a ten week course that exposes high school students to rigorous mathematical theory, robotics, and computer science. Click <a class = 'blandlink' href = 'https://www.dropbox.com/sh/pc083cjywg0sxjd/AADilzpdR4GMzlLcAqBPn58ja?dl=0&preview=Andrew%27s+Leap+++Final+Presentaion.pptx'>here</a> to see the powerpoint overview for the project I completed while there. Click <a class = 'blandlink' href = 'https://www.dropbox.com/sh/pc083cjywg0sxjd/AADilzpdR4GMzlLcAqBPn58ja?dl=0'>here</a> to see the source code / the rest of the files."];
    
    var edust = ["Fourteen 'Languages'", "Education |", "Self-Taught |", "Since Birth", "", "I have (to date) only ever taken one legitimate computer science class, and that was during my freshman year of high school. Since then, I have taught myself and used approximately twelve programming languages, mark-up languages, and libraries, or, Ruby, Rails, Python, C#, Java, HTML, CSS, Javascript, jQuery, Swift, R, Stata. See the bottom of this webpage for my various projects built in these languages. I also speak Arabic (Egyptian) and Spanish proficiently. I also taught myself to use BrainSuite, FreeSurfer, ITK-Snap, BESA Research Software, Adobe Photoshop, Adobe Premiere, Sketch, Stata, Final Cut Pro, and Logic Pro X."];
    
    var expic = ["Inventory Connection, LLC", "Experience |", "Full-Stack Designer + Developer |", "June 2016 - Present", "", "I am currently a full stack designer and developer for <a class = 'blandlink' href = 'http://inventoryconnectionllc.com'>Inventory Connection</a>, a start-up that provides retailers' vendors with real-time point of sales and inventory product data, enabling them to spend more time selling and less time counting. I built the company website, linked in the previous sentence, and I also single-handedly designed (from the ground up) the flagship application. I also single-handedly developed the application's front-end, and am currently working on the back-end with one of the co-founders of the start-up. I cannot yet link to the designs or application - however, be on the look-out for them (and us) in the future!"];
    
    var expes = ["ExplORer Surgical", "Experience |", "Technical Operations Intern |", "May 2016 - Present", "", "I am currently a technical operations intern for <a class = 'blandlink' href = 'http://explorersurgical.com'>Explorer Surgical</a>, a start-up that built ExplORer, an interactive surgical playbook that promotes optimal teamwork in the operating room. I helped create several tutorial videos demonstrating use of the application, and I also help out with occasional technological issues that various members of the team encounter. I am currently helping ensure that the company and its application meet HIPAA's physical and administrative requirements."];
    
    var expsa = ["Sewickley Academy (again)", "Experience |", "Information Technology Assistant |", "August 2015 - September 2015", "", "As an IT Assistant at Sewickley Academy, I assisted in computer and network set up and day-to-day technology maintenance. I also re-imaged all computers for use in the lower and senior school, and set up and installed apps on iPads for use in the lower school. In addition, aided teachers and students with any technological problems that plagued their devices, and set up and calibrated many projectors."];
    
    var expupmc = ["University of Pittsburgh Medical Center Children's Hospital", "Experience |", "Research Volunteer |", "June 2014 - September 2015", "", "While a research volunteer at UPMC Children's Hospital, I participated in various projects involving Characterization of Brain Morphometry and Cognitive Development in Neonates, carried out processing and analysis of magnetic resonance imaging data (this heavily involved coding and scripting), and used BrainSuite and FreeSurfer to perform analysis and volumetric segmentation of several brain MRI scans."];

    var projig = ["Instagram Logo Re-Design", "Project |", "Sketch |", "May 2016 | 10 min. |", "<a class = 'blandlink' href = 'portfolio/ig.png'>Download</a>", "Instagram's most recent logo caused somewhat of an uproar in the design community, as many thought it was both too flashy and ridiculous. Using Sketch, I decided to try and re-create the new logo, as well as create my own version of what I thought a modernized instagram logo might look like."];
    
    var projlpa= ["Low Polygon Art", "Project |", "Photoshop |", "May 2016 | 4 hr./photo |", "<a class = 'blandlink' href = 'portfolio/poly.zip'>Download</a>", "I created a low poly art version of what was, at the time, my current Facebook profile picture. After doing so, a few other people requested I create one for them, and I obliged. Displayed above are a few examples."];
    
    var projsr= ["Smart Receipts", "Project |", "Sketch, X-Code, Swift |", "March 2016 | 24 hr. |", "<a class = 'blandlink' href = 'portfolio/sr.pdf'>Design</a> | <a target = '_blank' class = 'blandlink' href = 'https://github.com/saieedgeorge0/smartReceipts'>Source Code</a>", "Created at UnCommon Hacks 2016, Smart Receipts allows you to store and organize your receipts. It won best UI/UX design, as presented by JPMorgan Chase Bank."];
    
    var projyc= ["Calc Color", "Project |", "Sketch, X-Code, Swift |", "July 2016 | 6 hr. |", "<a class = 'blandlink' href = 'portfolio/yc.pdf'>Design</a> | <a target = '_blank' class = 'blandlink' href = 'https://itunes.apple.com/us/app/calccolor/id1133313027?mt=8'>App Store</a> | <a target = '_blank' class = 'blandlink' href = 'https://github.com/saieedgeorge0/YourCalc'>Source Code</a>", "Calc Color is a simplistic, customizable calculator app for the iOS app store that allows the user to select from several different background designs."];
    
    var projfr= ["Facebook Re-Design", "Project |", "Sketch |", "September 2016 | 4 hr. |", "<a class = 'blandlink' href = 'portfolio/frd.png'>Download</a>", "My biggest issue with Facebook is the lack of integration of Messenger into Facebook itself. Currently, Facebook Messenger exists separately, and Facebook still has its own messaging page. In addition, you cannot collapse the sidebar that displays available contacts, and you can not move or resize the mini chat-windows which generally block the view of your newsfeed. As such, I tried to integrate Messenger into Facebook. The other issue I had was the lack of customizability. There are so many different things happening on the desktop page at once - while I personally prefer that, I know others that don't (maybe they don't use groups or events or fundraising or apps, etc). What I thus did, then, was split the page into sections, which theoretically can be added/removed. If you simply want to view your newsfeed, you can eliminate all other distractions. If you want to just view messenger, you can do that as well. Basically, you can add and remove blocks so that either a great deal or a very small amount is going on in the webpage you are viewing - but that is up to you. Lastly, I tried to give it a more flat, updated, and minimalistic look."];
    
    var projaig= ["Accident Report", "Project |", "Sketch |", "August 2016 | 3 hr. |", "<a class = 'blandlink' href = 'portfolio/aigmu.pdf'>Mock-Ups</a> | <a class = 'blandlink' href = 'portfolio/aigp.pdf'>Presentation</a>", "Created as part of a competition entry for AIG on Mindsumo, Accident Report is a mobile application that would allow drivers and joggers to make money for reporting road safety hazards for use by others and the proper authorities."];
    
    var projrp= ["Research Presentation", "Project |", "Sketch |", "June 2016 | 3 hr. |", "<a class = 'blandlink' href = 'portfolio/rp.pdf'>Presentation</a>", "Having grown tired of Powerpoint's fairly bland and cluttered designs, I decided to design my own presentation, for use in a social science and statistics class taken at the University of Chicago."];
    
    var projcw= ["St. Mary's Coptic Church's Website", "Project |", "HTML, CSS, jQuery |", "September 2016 | 4 hr. |", "<a target='blank' class = 'blandlink' href = 'http://stmarypittsburgh.org/'>Website</a> | <a target='blank' class = 'blandlink' href = 'https://github.com/saieedgeorge0/Church-Website'>Source Code</a>", "This website was created for St. Mary's Coptic Orthodox Church of Ambridge, PA. It was done pro-bono. It informs the congregation members of certain services and events (allowing them to sign-up to participate for them as well), and also permits them to view videos and photos posted by the church."];
    
    var projuh= ["Ultimate Horn", "Project |", "Sketch, X-Code, Swift |", "July 2016 | 6 hr. |", "<a target = '_blank' class = 'blandlink' href = 'https://itunes.apple.com/us/app/ultimatehorn/id1133338024?mt=8'>App Store</a> | <a target = '_blank' class = 'blandlink' href = 'https://github.com/saieedgeorge0/UltimateHorn'>Source Code</a>", "Ultimate Horn is simply an airhorn app. However, it automatically increases the user's phone's volume to the maximum value, in order to ensure the moment is never missed. It also allows the user to choose from fifteen unique sounds."];
    
    var projfg= ["Finals Generator", "Project |", "Python, Twilio |", "May 2016 | 6 hr. |", "<a class = 'blandlink' target='_blank' href = 'https://github.com/saieedgeorge0/finalschedule'>Source Code</a>", "This was a small script that I whipped up to allow University of Chicago students to easily gain access to their finals schedules. Students could text a number their class ID, and it would text them back with the date, time, and location for the final of that class."];
    
    var projuw= ["Unaccompanied Women Concert Poster", "Project |", "Photoshop |", "June 2016 | 30 min. |", "<a class = 'blandlink' href = 'portfolio/uw.png'>Download</a>", "I created this poster for Unaccompanied Women, an all-female A Capella group at the University of Chicago. It was done by using Photoshop to modify an image of a Vella Wine box cover, pro-bono."];
    
    var blogbwc = ["Why am I 'terrible' with computers?", "Being good with computers is not an innate skill |", "", "", "March 22, 2016 | 3-5 min. read", "Google is arguably the most powerful tool currently available to the masses. As someone who has spent the past five years teaching himself various programming languages, I am perfectly aware of just how useful Google can be - if one wants to solve his own problems and is willing to use it. <br> <br> When most people have a question, whether it relates to cooking or interior design, they tend to consult Google. 'How do I update my kindle,' 'How do I block a number,' and 'How do I get Netflix on my TV' are just a few of the suggestions that present themselves when I enter the phrase 'How do I' into the popular search engine. <br> <br> If such a powerful utility is so widely available, why have I spent literally hundreds of hours helping people print papers, reset their wireless routers, and unfreezing their phones? Now, don't get me wrong, I'm not complaining - I don't mind helping people, and I actually enjoy it. But why does no one think to use Google when they encounter a technological problem? Why do some people insist that \"technology doesn't like me\" and walk away, leaving their problems for someone else to solve? <br> <br> Do people not know how to use Google? Or do they not want to, content with relegating the task of making minor fixes to their devices to those other people that are supposedly more 'technologically savvy?' I'm inclined to think that it's the latter. Am I just 'naturally better' with technology than most other people? No - I broke three computers, two printers, and a shredder while in middle school, installing various pieces of software onto the computer and overworking both the printers and shredder. But what set me apart from the rest of my peers was that I spent hours and hours trying to fix what I had broken - and eventually succeeded in doing so. <br> <br> At the high school I attended, when something broke, people immediately walked away and went to look for one of the members of the technology team, my friend (another 'technologically savvy' student), or me. Regardless of who responded, we simply fixed the problem and moved on. No effort was put into actually educating the student on how to solve the problem, so she could solve it on her own the next time it occurred. I'm not blaming the faculty here - I did the same, and the faculty had no further responsibilities past fixing the problem. In addition, there existed no classes to teach students the basics of using computers or any other available electronic devices. The existence of such a class might seem absurd, but in a world where the ability to use technology efficiently is crucial to productivity, such a simple class might be necessary to show people that anyone can become 'technologically savvy.' <br> <br> Why not teach students how to use their computers, printers, and phones? Most of them spend the majority of their time using them for work or play, and so the ability to actually operate what they use would be an incredibly helpful skill. While offering a class on how to use computers might be the most useful, if it is not the most practical course of action, those that deal with information technology at schools might teach how to fix instead of just fixing. Instead of just replacing the paper in a printer when you see the flashing yellow light, teach the student how to recognize that error and what to do in response in the future. Instead of just connecting that printer to the student's computer, teach them how to actually do it. And honestly, this applies to anyone - if you know how to use technology, don't just fix other people's problems, show them how to do it for themselves. <br> <br> Is this a niche issue? Maybe. But more and more schools are implementing a one-to-one program (each student must bring a laptop with them) and it makes no sense to force students to use a tool they can't fully use. In a world where technology is becoming increasingly prevalent, it's important that people enter the workforce with the capability to use technology and fix any minor problems that may arise. I'll leave you with a minor anecdote which illustrates the importance of what I am discussing - take the modern toilet, for instance. It has become so essential to our daily lives that just about everyone uses it everyday, several times a day. Imagine if you had a friend who couldn't use the toilet. Each time he used it, he would need someone to help him operate it. This would grow extremely cumbersome, for both parties involved, and it would be to his advantage to finally learn how to use the toilet. A ridiculous analogy? You might think so, but as we use technology to do more and more, it will become increasingly more important to be able to actually know what what we're using and how to fix it. So, the next time you go to ask someone for help with a wireless router that isn't working, maybe consider going to Google first."];
    
    var blogdaw = ["How do mobile apps really work?", "It's not as complicated as you would think |", "",  "", "July 14, 2016 | 8-14 min. read", "<h3 class=\"section-heading\">Introduction</h3> <p>Designing and developing a simple app is not as complicated as you would think. Here, I'll prove it to you. In this post, I'll walk you through the design and development process of <a class = 'blandlink' href = 'https://itunes.apple.com/us/app/calccolor/id1133313027?mt=8'>CalcColor</a>, an app I recently pushed to the Apple App Store. It's simple, I know, but that's part of why I created it (if you're only interested in how apps work in general, and couldn't care less about how I built a calculator, scroll down to 'How Apps Work').</p> <a href'=#'> <img class='img-responsive img-padding' src='postimg/post-2-1.png' alt=''> </a> <h3 class=\"section-heading\">Planning</h3> <p>Now, on to the app building process. People like to think that those that build applications are geniuses who come up with ideas and then immediately sit down at the computer and start cranking out code, but nothing could be further from the truth. Most of the time, before even a single line of code is written, or any designs are made, everything needs to be planned out.</p> <p>Like most independent developers, I began by thinking through what CalcColor needed/what would have to be done. Because of its extreme simplicity, this was pretty straightforward. I wanted to build a calculator that was simple, functional, and that looked decent, allowing the user some control over its appearance. I thus decided I'd allow the user to change the app's background. Simple.</p> <p>For the actual calculator, I decided to keep it very basic, including the four basic operators (+, -, &#47;, &times;) and the &#94; and &radic; operators. The next thing I had to decide was how the actual calculator would function. Would it be similar to the built-in iOS calculator app, which evaluates expressions number by number (i.e. you type in 25, then +, and the 25 disappears, allowing you to type in another number), or would it allow the user to type in the entire expression (i.e. you type in 25 + 5 - 7 * (25 * 4)) before evaluation? I eventually settled on the latter, to set CalcColor apart from the stock iOS calculator.</p> <p>Having taken care of that question, I needed to decide on the app's appearance. Because gradients can make for good backgrounds, I decided to make most of the backgrounds available to the user gradient-based. Because I wanted the calculator to take up the entire phone screen, I decided to make the background selection on a separate page from the calculator. With regards to the calculator itself, I was aiming for a minimalistic design, so I decided to omit the traditional button borders, going for a calculator that contained no lines.</p> <br><h3 class=\"section-heading\">The Design Process</h3> <p> Having planned out the layout and features of the calculator, I needed to come up with some visual that would allow me to see what the end result might look like. For that, I used Sketch (quite possible the greatest designer's tool ever created). Similar to Photoshop, but significantly easier to use, Sketch allows you to draw various shapes and mess with their attributes in order to design what your web or mobile applications will look like before you begin coding them. And so I began 'drawing'.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-2.png\" alt=\"\"></a> <p>Now that I had a sketch of what I wanted the calculator to look like, I went ahead and added in color and decided what gradients I wanted to use.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-3.png\" alt=\"\"></a> <p>And, vuala, there you have it. On to building it!</p> <br> <h3 class=\"section-heading\">How Apps (and CalcColor) Work</h3> <p>Before I talk about the specifics of coding CalcColor, I'll talk about what you really came here wanting to know - how apps work (this doesn't really include games - they're a bit different, as they use some animation and often times certain engines such as Unity - but more on that in another post). Most apps are comprised of pages which contain buttons, tables, and navigation bars (the bars at the bottom or top of many apps that are present no matter what page you navigate to). The main page of CalcColor, for instance, is comprised of twenty-three different buttons. One is slightly different than the other twenty-two (the settings button), in that it has a different function, and there is also some text at the top of the app, for showing the user their calculator input as well as the output after they hit the equals button. In addition, there is an image in the background. The second page contains twenty-one buttons, along with an image, and two bits of text - but unlike on the main page, these pieces of text <strong>never need to be modified</strong> - they won't ever change.</p> <p>So now we know what exactly our calculator app consists of. However, that doesn't explain how we get those buttons there, or how we make them do anything. Because this is an iOS app, XCode is the piece of software that allows us to answer these questions. In XCode, there is something called the storyboard. This is what allows us to view what items will be on our app pages, as well as add more items to those pages. It's basically a drag-and-drop system, and, while you can still forego the storyboard and do everything programmatically, it's much easier to just use the storyboard (I personally have never built an app without the storyboard). As you can see below, you can literally just search for a button, drag and drop it onto the storyboard, and change its text as you see fit. Among many other things, you can also add labels and text fields. Modifying the text in the buttons and labels is easy, as XCode allows us to simply double click them and change their text.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-4.png\" alt=\"\"></a> <p>Okay, so we now have two pages with all the buttons and text we need (having simply dragged-and-dropped all those items and changed their text). We also dragged on something called an 'ImageView,' which is simply a fancy term for something that can contain an image of our choosing, and set the background to the default gradient that we wanted (exported as an image from Sketch earlier). If we run our app right now, however, we are presented with the default page (the calculator), and clicking the buttons do absolutely nothing - so our calculator is not functional, and we can't even get to the other page to change our background. This is clearly a problem, and that's what we'll fix next.</p> <p>So how do we make our buttons function? We definitely want our user to be able to change the background, so let's start with making our 'settings' button function.  How would this work? When the user taps the settings button (and this is a gross oversimplification), the screen of our phone sends our app a message that basically says 'Hey! The user tapped me! Do with that what you will.' So what we're going to do is make it so that when our app receives this message from the settings button, our app moves over to the other page. In XCode, how do we do this? We click the settings button, hold control, and drag over onto the other page, and we select Show (because we want clicking this button to show our page). And that's it! When you run the app, and you tap the button, the screen says, \"Hey! I've been tapped,\" and so the app says, \"Okay! I'm going to move the user to the other page you've linked this button to!\" On this page, we have a back button, and we can do the exact same thing to ensure that the user can tap this button to return to the main page.</p> <p>On to making our calculator function! The first thing we're going to do is link all of the stuff on our main page to our code. Let's start with the buttons that are our numbers. We can hold click our button, hold control once again, and drag over into our code. Doing so creates something called an action (you can ignore the <em>@IBAction</em>, <em>func</em>, and <em>sender:AnyObject</em> for now). Take the first action (seen below), seven (we linked the number seven button to this action). When seven is pressed, our screen tells our app, 'Hey! Seven was pressed!' When this happens, our app says, 'Cool! Make whatever action is connected to the seven button happen.' </p> <a href=\"#\"> <img class=\"img-responsive img-padding\" src=\"postimg/post-2-5.png\" alt=\"\"></a> <p>So now the app goes to do whatever we told it to do inside that action. For something like the seven button, what would we want it to do? Well, we'd want it to do two things. First, we'd want to show the user they'd clicked the number seven, by displaying a seven as text at the top of the calculator page. Next, we'd also want to save that number somehow (as the user is going to type more numbers and various operators, so we have to remember that the button seven was pressed so we can keep it for when they type more numbers, and for when they hit the equals button). So how do we make both of these happen?</p> <p>Let's save the number first. How do we do that? Well, we create something called a String. A string is, well, a string of characters, which, somewhat obviously, are characters in the English language. These characters can be letters, numbers, and various symbols (like %, ^, and #). We thus create a string called <em>inTyping</em> (don't ask me why I named it that). Would we want to do this inside our action? No? Why not? Because if we did, every time we clicked the button seven, we would create a new string called <em>inTyping</em>, wiping away what <em>inTyping</em> used to hold. Thus, we'll do it at the beginning of our program (the actual line is <em>var inTyping: String = \"\"</em> - this tells our app that we are creating a string of characters called inTyping that is currently empty). </p> <p>Okay, now we have a string called <em>inTyping</em> which can hold our seven. However, because the user will type several numbers and operators before he hits the equals button, we don't want to set that string equal to seven when the seven button is clicked - we want to ADD seven to that string, so if the user already typed five, hitting the seven button will give us a string of \"57\" instead of clearing the five and just giving us \"7\". How do we do that? Well, in our action for when the seven button is pressed, we use <em>inTyping += \"7\"</em>. This is shorthand for <em>inTyping = inTyping + \"7\"</em>, which is just saying, 'Hey, take the current value of inTyping and the number \"7\" to it' (add in the sense that it tacks 7 on to 5, such that \"5\" + \"7\" = \"57\" and not \"12\"). </p> <p>Excellent! So if we do this for all the buttons, when we click any button, it adds the character of that button onto the end of our string of characters. However, nothing is appearing at the top of the calculator! The number is still stuck on 0. This is because, while we've saved our string, we haven't told our app to display it. We need a way to tell our app to modify the text at the top of our calculator. How do we do this? Well, we click the text, click control, and drag over onto our code. This creates something called an <em>@IBOutlet</em> (again, don't worry about the actual meaning of this for now). Basically this tells our code, 'Look! There's some text in our app, and if we want to do anything at all with this text, we can just call the name (in this case <em>resultField</em>) that we assigned this text, and then we can do what we want with it!' So each time we add a new number or symbol to <em>inTyping</em>, we also want to update the text. So inside all the actions for our buttons, we can type <em>resultField.text = inTyping</em>. Simply put, every time we click any of our calculator buttons, the text of our <em>resultField</em> will be set equal to our string <em>inTyping</em>. Now, when we click the seven button, we save seven to our string (this has to be done first!), and display it up top in our calculator's text field.</p> <p>From here, it's fairly straightforward what should be done. We do basically the exact same thing with the operators, so that if we click the \"+\" button, we save it to our string and display it. The same goes for the other operators. When we click the \"=\" button, we take the full string (for example, <strong>\"5+7+9-3/6\"</strong>), and tell the programming language we're using (in this case, Swift) to compute the result of that string. We then save that to <em>inTyping</em> and show it in our text field, clearing what was previously there. For the delete button, we delete the last character of <em>inTyping</em> and update our text field. For the clear button, we delete everything in <em>inTyping</em> and set our text field to zero.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-6.png\" alt=\"\"></a> <p>For the backgrounds, we do the same thing - we create actions in our code for each individual background button, and when that specific button is clicked, we tell our app to change the background on both pages to that background. Because we probably want to remember what background was selected even if the user leaves the app, we also save that background somewhere in the app where it stays even if the user quits the app. And really, that's basically it!</p> <br> <h3 class=\"section-heading\">Conclusion</h3> <p>If you realized that there would be several major problems with CalcColor if this is all we did to build it, then you're well on your way to thinking like a programmer. For one, we can currently type any of the numbers and operators in any order as many times as we like. For example, we could type <strong>\"77...+++-/)\"</strong>. This makes no sense, obviously, and if we allow the user to hit the equal button having typed this in, our app will crash - our programming language doesn't know how to compute expressions that aren't valid. We would also need to make sure all of our parentheses match. In addition, the square root operator (√) and the multiplication operator (×) can't be read as part of our expression when being calculated either - we have to replace them with \"<em>sqrt</em>\" and \"*\" respectively. Lastly, because of the way Swift works, if the user were to type in <strong>\"3/4\"</strong> or <strong>\"5/3\"</strong>, he would get an answer of <strong>\"0\"</strong> and <strong>\"1\"</strong>, respectively. Why? Because (and again, this is a gross oversimplification) if both numbers don't have decimal points, Swift thinks our answer shouldn't have decimal points either, and so it immediately rounds down our result (even \"1.99\" would be rounded down to \"1\"). Clearly, we can't have this happen either. I'm not going to tell you how exactly I solved these problems, but if you're interested, try and solve them! You don't have to come up with the code required to solve them, but rather think through the logic required to solve them (i.e. if the user has typed a decimal point, then we don't want them to be able to hit the decimal point again, at least until they click an operator button). If you're really geeky (like me), feel free to <a class='blandlink' href = \"mailto:gs@georgesaieed.com\">email me</a> with how you'd solve some of these problems!</p>"];
    
    var blogphb = ["Could you power your house with your bike?", "Yes, if you ate two cheeseburgers a minute |",  "",  "", "July 15, 2016 | 2-3 min. read", "<h3 class=\"section-heading\">The Question</h2> <p>I recently had Mark P. from Pittsburgh ask me how bicycles work - while he was asking as a joke, I decided I'd write about something related. So, <strong> how much power does a bicycle generate</strong>? And what could you power off of that energy?</p> <br><h3 class=\"section-heading\">The Answer</h3> <p>If you're an average, decently fit person who is casually riding your bike across flat terrain, you can generate about 100-150 watts of power. If you're a hardcore biker (i.e. you compete in the Tour de France), you can generate about 250 watts of power, and if you're really going hard while biking uphill, you can get up to 400 - 500 watts of power in.</p> <p>For the purposes of this post, though, I'm going to assume you're an average person and not a ripped athletic biker (a fair assumption, I think). So let's say, biking hard, you can generate 150 watts of power as you bike. So what could you power if you generated 150 watts of power for an hour? Well, for one, <strong>you could probably power a light bulb</strong> (for instance, incandescent lightbulbs draw about 100 watts of energy) for an hour. Ceiling fans also tend to use between 25 - 90 watts of power (depending on their size and speed), so you could probably also power a ceiling fan. Laptops require about 45 watts of power to stay on, while a smaller monitor (17\" LCD, for instance) requires about 40 watts of power - so you could probably power your laptop and an external monitor (not that that would be any good, as you'd be too busy biking).</p> <p><strong>Could you power all of the appliances in a house?</strong> Clearly not, if you wouldn't be able to power two lightbulbs (200 watts). Let's say you were to pedal an hour a day, every day, for thirty days. You'd generate about 100 * 30 watts, or 3000 watts (3 kWh). The typical family uses about 920 kWh per month, so you wouldn't even come close to generating enough power to keep your house running. Okay, fine. Let's pretend, though, that you bike 24 hours per day. You'd generate about 100 * 24 * 30 watts, or 72,000 watts (72 kWh). That's still less than 10% of what you'd need to generate. However, we absolutely don't want to be biking 24 hours a day, so let's assume we bike three hours a day (100 * 3 * 30 = 9 kWh for the month). <strong>How fast would you have to bike in order to get that 9 kWh up to 920 kWh?</strong> Assuming you weigh 160 pounds, and that your bike weighs 20 pounds, generating those 9 kWh would require you to bike at 15 mph every day for three hours. To generate the 920 kWh required to power a house, you would have to bike at a constant 77 mph, for three hours nonstop every. single. day. To put that in perspective, the Earth's circumference is approximately 24,901 miles. After 111 days of biking at that speed, for three hours each day, you'd have biked enough miles to go around the earth. Fine. For the sake of argument, let's assume you could bike every day for three hours at 77 mph. <strong>How much food would you have to eat to keep biking?</strong> Well, biking at 77 mph, you'd burn approximately 105,000 calories after three hours. To put that in perspective, burning a pound of fat requires you to lose 3,500 calories. After biking for three hours, you'd have lost <strong>35 pounds</strong>. If you don't want to lose weight, you'd have to eat 35,000 calories per hour. A McDonald's regular cheeseburger is approximately 313 calories - so you'd need to eat about 1.85 cheeseburgers <strong>per minute</strong> so as not to lose weight. </p> <p><strong>In conclusion</strong>: please don't try to power your house using your bicycle.</p>"];
    
    var blogrsl = ["How much fun would it be to run at the speed of light?", "Not even a little bit fun |", "",  "", "July 18, 2016 | 1-3 min. read", "<h3 class=\"section-heading\">The Question</h3> <p>The article title pretty much says it all - <strong>how much fun would it be to run at the speed of light?</strong> </p> <br> <h3 class=\"section-heading\">The Answer</h2> <p>Let me preface the rest of this article by saying that, if you were ever to run at the speed of light, you'd probably <strong>rip every muscle in your body</strong> and hit something so quickly and with such force that you'd be <strong>squashed like a bug</strong>. It's also important to note that you can't run at the speed of light. But just for kicks, let's assume neither of these are problems and that we can run at the speed of light. </p> <p>First things first - how much food would you have to eat in order to keep running at the speed of light without dying of malnutrition? Well, light travels at <strong>186,000 mi/sec</strong> or <strong>669,600,000 mph</strong>. So you'd be running at a lovely 669,600,000 mph. Splendid. Now, let's assume you're going to be running at the speed of light for an hour (because why not, right)? Well, according to this random treadmill calculator I found on the internet (and we all know everything on the internet is accurate), running at that speed would cause a 180 pound male to burn <strong>88,230,305,606 calories</strong>. So you'd be burning 88 billion calories. Lovely. Now, I don't know how many of you have been to the Cheesecake Factory, but they sell a cake they call the <strong>Chocolate Tower Truffle Cake</strong> (it's actually quite amazing in every possible way). One slice is <strong>1,680 calories</strong> (totally worth it), and an entire cake is 12 slices, or <strong>20,160 calories</strong>. In order to keep up with your caloric burn, you'd need to eat <strong>88 billion\/20 thousand calories</strong> per hour, or <strong>4,376,503 cakes per hour</strong>. That's <strong>1,216 cakes <em>per second</em></strong>. </p> <img class=\"img-responsive img-padding\" src=\"postimg/post-4-1.jpg\" alt=\"\"> <p>That is ABSURD. That's more than <strong>16 times</strong> what blue whales eat in <strong>a single day</strong>. Not to mention that due to the extreme stress you'd be under while running that you'd probably vomit the food back up at the same rate at which you ate it. </p> <p>Fine, you'd have to eat, like, <strong>a lot</strong>. So how far could you run in that hour (or a little bit longer)? If you ran for <strong>67 minutes</strong> (assuming you ran in a straight line and had something to run on), you would be able to run <strong>from the Earth to Jupiter... <em>and back</em></strong>. </p> <p>Remember how in the last article, I said that the average family consumed approximately 920 kWh of energy per month? Well, in 2013, the entire United States consumed approximately <strong>25,451 TWh</strong> of energy, or <strong>25,451,000,000,000 kWh</strong> of energy (25 trillion kWh, if that wasn't clear). Performing all the calculations, if you could harness the energy produced from your run, you would produce enough energy to power <strong>the entire United States</strong> for a solid <strong>thirty seconds</strong>. </p> <p><strong>In conclusion</strong>, light (and the Flash) <em>move really, really, REALLY fast</em>.</p>"];
    
    var about = ["So You Want to Know Who I Am", "I ask too many questions, I know. Sorry. Well, actually, no, I'm not.", "",  "", "", "<h3 class=\"section-heading\">Who Am I?</h3> <p>I've broken three computers, two shredders, a printer, and a wireless router. I know you're judging me now, so I'll just say I was both a very foolish and very curious middle school child (and I'll have you know I fixed two of those computers). And that is how I taught myself to fix the everyday problems people face with their phones, computers, and the multitude of other gadgets out there. From there, I found programming, and I immediately fell in love. Over the course of five years, I proceeded to teach myself Java, Python, Ruby, Rails, C#, Swift, R, and Stata, building a multitude of web and mobile applications for all kinds of different devices in the process. Later down the line, I began to look into design, teaching myself how to use Photoshop and Sketch. On July 21 and 22, 2016, I taught myself HTML(5), CSS(3), Javascript, jQuery, and bootstrap, spending about 10 hours each day familiarizing myself with front-end development languages.</p> <p>I've released one app on the Windows App Store (<a class='blandlink' href=\"https://www.microsoft.com/en-us/store/apps/epichess/9wzdncrds3q\">Epichess</a>), two apps on the iOS App Store (<a class='blandlink' href=\"https://itunes.apple.com/us/app/calccolor/id1133313027?mt=8\">CalcColor</a> and <a class='blandlink' href=\"https://itunes.apple.com/us/app/ultimatehorn/id1133338024?mt=8\">UltimateHorn</a>), and am currently working as a Full Stack Designer for <a class='blandlink' href = \"http://inventoryconnectionllc.com\">Inventory Connection, LLC</a>, to design and build the front-end for their main product. I am constantly looking to learn more about everything and anything (especially tech), and so I often build random applications (see my <a class='blandlink' href=\"http://github.com/saieedgeorge0\">GitHub</a>) and read as much as I can. I am a Computer Science and Statistics major at the University of Chicago (I'm very interested in machine learning, deep neural nets, and artificial intelligence), and you can often find me helping other people with their computer or phone troubles. I hope to have a profound impact on the world, and my dream is to one day found my own start-up.</p> <br> <h3 class=\"section-heading\">How My Blog Was Started</h3> <p>One warm July day, I was sitting on my couch, randomly answering Quora questions (yes, I do that, and I'm sure you have before too), when I realized that so many of the questions about programming people were asking I had once asked myself. Just the previous day, someone was telling me about how she couldn't wrap her head around how mobile apps could work. While she was talking to me, I chuckled silently, as I too had once been dumbfounded by websites and applications in general. And so I decided to start this blog, to try and answer all the questions about technology that I once had that I eventually answered myself.</p>"];
    
    var contact = ["Get In Touch With Me", "Currently Accepting Freelance Work |", "<a class = 'blandlink' href = 'mailto:gs@georgesaieed.com'>gs@georgesaieed.com</a> |", "412-329-8021",  "", "<form id=\"da-form\" name=\"sentMessage\" action = \"https://formspree.io/gs@georgesaieed.com\" method=\"POST\" novalidate> <div class=\"row control-group\"><div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>Name</label> <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"name\" required data-validation-required-message=\"Please enter your name.\" name = \"PersonName\"><p class=\"help-block text-danger\"></p></div></div> <div class=\"row control-group\"><div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>Email Address</label> <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\" name = \"_replyto\"><p class=\"help-block text-danger\"></p> </div> </div> <div class=\"row control-group\"> <div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>What's Your Question?</label> <textarea rows=\"5\" class=\"form-control\" placeholder=\"What's Your Question?\" id=\"message\" required data-validation-required-message=\"Please enter a message.\" name = \"PersonQuestion\"></textarea> <p class=\"help-block text-danger\"></p> </div> </div> <br> <div id=\"success\"></div> <div class=\"row\"> <div class=\"form-group col-xs-12\"> <input type=\"text\" name=\"_gotcha\" style=\"display:none\" /> <input type=\"hidden\" name=\"_next\" value=\"/?popup=thanks\" /><button type=\"submit\" id='contact-submit' class=\"btn btn-default\">Submit!</button></div> </div> </form>"];
    
    var thankyou = ["Thanks!", "", "", "", "I got your message! I'll get back to you as soon as I can."];
    
    
    $(document).ready(function() {
        function getUrlVars()
        {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        }
        return vars;
        }
        
        if ((getUrlVars()["popup"]=="thanks")) {
            $('#popup-image').attr("src", "postimg/contact.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(thankyou[0]);
            $('#p-type').html(thankyou[1]);
            $('#p-subtype1').html(thankyou[2]);
            $('#p-subtype2').html(thankyou[3]);
            $('#p-subtype3').html(thankyou[4]);
            $('#p-body').html(thankyou[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="about")) {
            $('#popup-image').attr("src", "postimg/about.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(about[0]);
            $('#p-type').html(about[1]);
            $('#p-subtype1').html(about[2]);
            $('#p-subtype2').html(about[3]);
            $('#p-subtype3').html(about[4]);
            $('#p-body').html(about[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="blogbwc")) {
            $('#popup-image').attr("src", "postimg/blogbwc.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(blogbwc[0]);
            $('#p-type').html(blogbwc[1]);
            $('#p-subtype1').html(blogbwc[2]);
            $('#p-subtype2').html(blogbwc[3]);
            $('#p-subtype3').html(blogbwc[4]);
            $('#p-body').html(blogbwc[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="blogdaw")) {
            $('#popup-image').attr("src", "postimg/blogdaw.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(blogdaw[0]);
            $('#p-type').html(blogdaw[1]);
            $('#p-subtype1').html(blogdaw[2]);
            $('#p-subtype2').html(blogdaw[3]);
            $('#p-subtype3').html(blogdaw[4]);
            $('#p-body').html(blogdaw[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="blogphb")) {
            $('#popup-image').attr("src", "postimg/blogphb.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(blogphb[0]);
            $('#p-type').html(blogphb[1]);
            $('#p-subtype1').html(blogphb[2]);
            $('#p-subtype2').html(blogphb[3]);
            $('#p-subtype3').html(blogphb[4]);
            $('#p-body').html(blogphb[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="blogrsl")) {
            $('#popup-image').attr("src", "postimg/blogrsl.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(blogrsl[0]);
            $('#p-type').html(blogrsl[1]);
            $('#p-subtype1').html(blogrsl[2]);
            $('#p-subtype2').html(blogrsl[3]);
            $('#p-subtype3').html(blogrsl[4]);
            $('#p-body').html(blogrsl[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="contact")) {
            $('#popup-image').attr("src", "postimg/contact.jpg");
            $('#the-hr').css('border-color', 'white');
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(contact[0]);
            $('#p-type').html(contact[1]);
            $('#p-subtype1').html(contact[2]);
            $('#p-subtype2').html(contact[3]);
            $('#p-subtype3').html(contact[4]);
            $('#p-body').html(contact[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="educmu")) {
            $('#popup-image').attr("src", "postimg/educmu.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(educmu[0]);
            $('#p-type').html(educmu[1]);
            $('#p-subtype1').html(educmu[2]);
            $('#p-subtype2').html(educmu[3]);
            $('#p-subtype3').html(educmu[4]);
            $('#p-body').html(educmu[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="edusa")) {
            $('#popup-image').attr("src", "postimg/edusa.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(edusa[0]);
            $('#p-type').html(edusa[1]);
            $('#p-subtype1').html(edusa[2]);
            $('#p-subtype2').html(edusa[3]);
            $('#p-subtype3').html(edusa[4]);
            $('#p-body').html(edusa[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="edust")) {
            $('#popup-image').attr("src", "postimg/edust.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(edust[0]);
            $('#p-type').html(edust[1]);
            $('#p-subtype1').html(edust[2]);
            $('#p-subtype2').html(edust[3]);
            $('#p-subtype3').html(edust[4]);
            $('#p-body').html(edust[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="eduuc")) {
            $('#popup-image').attr("src", "postimg/eduuc.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(eduuc[0]);
            $('#p-type').html(eduuc[1]);
            $('#p-subtype1').html(eduuc[2]);
            $('#p-subtype2').html(eduuc[3]);
            $('#p-subtype3').html(eduuc[4]);
            $('#p-body').html(eduuc[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="expes")) {
            $('#popup-image').attr("src", "postimg/expes.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(expes[0]);
            $('#p-type').html(expes[1]);
            $('#p-subtype1').html(expes[2]);
            $('#p-subtype2').html(expes[3]);
            $('#p-subtype3').html(expes[4]);
            $('#p-body').html(expes[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="expic")) {
            $('#popup-image').attr("src", "postimg/expic.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(expic[0]);
            $('#p-type').html(expic[1]);
            $('#p-subtype1').html(expic[2]);
            $('#p-subtype2').html(expic[3]);
            $('#p-subtype3').html(expic[4]);
            $('#p-body').html(expic[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="expsa")) {
            $('#popup-image').attr("src", "postimg/expsa.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(expsa[0]);
            $('#p-type').html(expsa[1]);
            $('#p-subtype1').html(expsa[2]);
            $('#p-subtype2').html(expsa[3]);
            $('#p-subtype3').html(expsa[4]);
            $('#p-body').html(expsa[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="expupmc")) {
            $('#popup-image').attr("src", "postimg/expupmc.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(expupmc[0]);
            $('#p-type').html(expupmc[1]);
            $('#p-subtype1').html(expupmc[2]);
            $('#p-subtype2').html(expupmc[3]);
            $('#p-subtype3').html(expupmc[4]);
            $('#p-body').html(expupmc[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projaig")) {
            $('#popup-image').attr("src", "postimg/projaig.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projaig[0]);
            $('#p-type').html(projaig[1]);
            $('#p-subtype1').html(projaig[2]);
            $('#p-subtype2').html(projaig[3]);
            $('#p-subtype3').html(projaig[4]);
            $('#p-body').html(projaig[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projcw")) {
            $('#popup-image').attr("src", "postimg/projcw.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(projcw[0]);
            $('#p-type').html(projcw[1]);
            $('#p-subtype1').html(projcw[2]);
            $('#p-subtype2').html(projcw[3]);
            $('#p-subtype3').html(projcw[4]);
            $('#p-body').html(projcw[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projfg")) {
            $('#popup-image').attr("src", "postimg/projfg.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(projfg[0]);
            $('#p-type').html(projfg[1]);
            $('#p-subtype1').html(projfg[2]);
            $('#p-subtype2').html(projfg[3]);
            $('#p-subtype3').html(projfg[4]);
            $('#p-body').html(projfg[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projfr")) {
            $('#popup-image').attr("src", "postimg/projfr.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projfr[0]);
            $('#p-type').html(projfr[1]);
            $('#p-subtype1').html(projfr[2]);
            $('#p-subtype2').html(projfr[3]);
            $('#p-subtype3').html(projfr[4]);
            $('#p-body').html(projfr[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projig")) {
            $('#popup-image').attr("src", "postimg/projig.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projig[0]);
            $('#p-type').html(projig[1]);
            $('#p-subtype1').html(projig[2]);
            $('#p-subtype2').html(projig[3]);
            $('#p-subtype3').html(projig[4]);
            $('#p-body').html(projig[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projlpa")) {
            $('#popup-image').attr("src", "postimg/projlpa.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projlpa[0]);
            $('#p-type').html(projlpa[1]);
            $('#p-subtype1').html(projlpa[2]);
            $('#p-subtype2').html(projlpa[3]);
            $('#p-subtype3').html(projlpa[4]);
            $('#p-body').html(projlpa[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projrp")) {
            $('#popup-image').attr("src", "postimg/projrp.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projrp[0]);
            $('#p-type').html(projrp[1]);
            $('#p-subtype1').html(projrp[2]);
            $('#p-subtype2').html(projrp[3]);
            $('#p-subtype3').html(projrp[4]);
            $('#p-body').html(projrp[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projsr")) {
            $('#popup-image').attr("src", "postimg/projsr.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(projsr[0]);
            $('#p-type').html(projsr[1]);
            $('#p-subtype1').html(projsr[2]);
            $('#p-subtype2').html(projsr[3]);
            $('#p-subtype3').html(projsr[4]);
            $('#p-body').html(projsr[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projuh")) {
            $('#popup-image').attr("src", "postimg/projuh.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projuh[0]);
            $('#p-type').html(projuh[1]);
            $('#p-subtype1').html(projuh[2]);
            $('#p-subtype2').html(projuh[3]);
            $('#p-subtype3').html(projuh[4]);
            $('#p-body').html(projuh[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projuw")) {
            $('#popup-image').attr("src", "postimg/projuw.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projuw[0]);
            $('#p-type').html(projuw[1]);
            $('#p-subtype1').html(projuw[2]);
            $('#p-subtype2').html(projuw[3]);
            $('#p-subtype3').html(projuw[4]);
            $('#p-body').html(projuw[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        if ((getUrlVars()["popup"]=="projyc")) {
            $('#popup-image').attr("src", "postimg/projyc.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'black');
            $('#p-heading').html(projyc[0]);
            $('#p-type').html(projyc[1]);
            $('#p-subtype1').html(projyc[2]);
            $('#p-subtype2').html(projyc[3]);
            $('#p-subtype3').html(projyc[4]);
            $('#p-body').html(projyc[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }
        
        
        $(document).mouseup(function(e)
        { if(open == true) {
        var subject = $(".popup-stuff"); 
        var subject2 = $("#popup-image");

        if((e.target.id != subject.attr('id'))&(e.target.id != subject2.attr('id')) && !subject.has(e.target).length)
        {
            open=false;
            $('#contains').css("position", "relative");
            $('#contains').css("height", "");
            $('#contains').css("width", "");
            $('#popup').fadeOut(500);
            $('.pop-back').fadeOut(500);
            $('#the-hr').css('border-color', '#eeeeee');
            if($('#p-heading').html() =="University of Chicago"){                              
                scrollToAnchor('UofC');
            }
            if($('#p-heading').html() =="Sewickley Academy"){                              
                scrollToAnchor('anch2');
            }
            if($('#p-heading').html() =="Carnegie Mellon University"){                              
                scrollToAnchor('anch3');
            }
            if($('#p-heading').html() =="Fourteen Languages"){                              
                scrollToAnchor('anch4');
            }
            if($('#p-heading').html() =="Inventory Connection, LLC"){                              
                scrollToAnchor('IC');
            }
            if($('#p-heading').html() =="ExplORer Surgical"){                              
                scrollToAnchor('anch6');
            }
            if($('#p-heading').html() =="Sewickley Academy (again)"){                              
                scrollToAnchor('anch7');
            }
            if($('#p-heading').html() =="University of Pittsburgh Medical Center Children's Hospital"){                              
                scrollToAnchor('anch8');
            }
            if($('#p-heading').html() =="Instagram Logo Re-Design"){                              
                scrollToAnchor('IGDesign');
            }
            if($('#p-heading').html() =="Low Polygon Art"){                              
                scrollToAnchor('anch10');
            }
            if($('#p-heading').html() =="Smart Receipts"){                              
                scrollToAnchor('anch11');
            }
            if($('#p-heading').html() =="Calc Color"){                              
                scrollToAnchor('anch12');
            }
            if($('#p-heading').html() =="Facebook Re-Design"){                              
                scrollToAnchor('anch13');
            }
            if($('#p-heading').html() =="Accident Report"){                              
                scrollToAnchor('anch14');
            }
            if($('#p-heading').html() =="Research Presentation"){                              
                scrollToAnchor('anch15');
            }
            if($('#p-heading').html() =="St. Mary's Coptic Church's Website"){   
                scrollToAnchor('anch16');
            }
            if($('#p-heading').html() =="Ultimate Horn"){                              
                scrollToAnchor('anch17');
            }
            if($('#p-heading').html() =="Finals Generator"){                              
                scrollToAnchor('anch18');
            }
            if($('#p-heading').html() =="Unaccompanied Women Concert Poster"){   
                scrollToAnchor('anch19');
            }
            if($('#p-heading').html() =="Why am I 'terrible' with computers?"){   
                scrollToAnchor('badcomp');
            }
            if($('#p-heading').html() =="How do mobile apps really work?"){   
                scrollToAnchor('anch21');
            }
            if($('#p-heading').html() =="Could you power your house with your bike?"){
                scrollToAnchor('anch22');
            }
            if($('#p-heading').html() =="How much fun would it be to run at the speed of light?"){   
                scrollToAnchor('anch23');
            }
        } }
    });
    });
        
        $('.container-fluid').scroll(function(){
            $('.pg-section').css('visibility', 'hidden');
            $('.pg-section2').css('visibility', 'hidden');
            $('.pg-section3').css('visibility', 'hidden');
            $('.pg-section4').css('visibility', 'hidden');
            $('.pg-section5').css('visibility', 'hidden');
            $('.pg-section6').css('visibility', 'hidden');
        });
        
        $(".edu-point").click(function(){
            scrollToAnchor('UofC');
        });
        
        $(".edu-point").hover(function(){
            $('#uchicago').css('-webkit-filter', 'blur(0px)');
            $('#sewickleyacademy').css('-webkit-filter', 'blur(0px)');
            $('#carnegiemellon').css('-webkit-filter', 'blur(0px)');
            $('#selftaught').css('-webkit-filter', 'blur(0px)');
            $('#uchicago').css('-moz-filter', 'blur(0px)');
            $('#sewickleyacademy').css('-moz-filter', 'blur(0px)');
            $('#carnegiemellon').css('-moz-filter', 'blur(0px)');
            $('#selftaught').css('-moz-filter', 'blur(0px)');
            $('#uchicago').css('-ms-filter', 'blur(0px)');
            $('#sewickleyacademy').css('-ms-filter', 'blur(0px)');
            $('#carnegiemellon').css('-ms-filter', 'blur(0px)');
            $('#selftaught').css('-ms-filter', 'blur(0px)');
            $('#uchicago').css('-o-filter', 'blur(0px)');
            $('#sewickleyacademy').css('-o-filter', 'blur(0px)');
            $('#carnegiemellon').css('-o-filter', 'blur(0px)');
            $('#selftaught').css('-o-filter', 'blur(0px)');
            $('#uchicago').css('filter', 'blur(0px)');
            $('#sewickleyacademy').css('filter', 'blur(0px)');
            $('#carnegiemellon').css('filter', 'blur(0px)');
            $('#selftaught').css('filter', 'blur(0px)');
        },
        function(){
            if ($(window).width() > 991){
            $('#uchicago').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#carnegiemellon').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#selftaught').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#uchicago').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#carnegiemellon').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#selftaught').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#uchicago').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#carnegiemellon').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#selftaught').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#uchicago').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#carnegiemellon').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#selftaught').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#uchicago').css('filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy').css('filter', 'blur(2px) grayscale(60%)');
            $('#carnegiemellon').css('filter', 'blur(2px) grayscale(60%)');
            $('#selftaught').css('filter', 'blur(2px) grayscale(60%)');
            }
        });
    
        $(".exp-point").click(function(){
            scrollToAnchor('IC');
        });
    
        $(".exp-point").hover(function(){
            $('#inventoryconnection').css('-webkit-filter', 'blur(0px)');
            $('#explorer').css('-webkit-filter', 'blur(0px)');
            $('#sewickleyacademy2').css('-webkit-filter', 'blur(0px)');
            $('#upmc').css('-webkit-filter', 'blur(0px)');
            $('#inventoryconnection').css('-moz-filter', 'blur(0px)');
            $('#explorer').css('-moz-filter', 'blur(0px)');
            $('#sewickleyacademy2').css('-moz-filter', 'blur(0px)');
            $('#upmc').css('-moz-filter', 'blur(0px)');
            $('#inventoryconnection').css('-ms-filter', 'blur(0px)');
            $('#explorer').css('-ms-filter', 'blur(0px)');
            $('#sewickleyacademy2').css('-ms-filter', 'blur(0px)');
            $('#upmc').css('-ms-filter', 'blur(0px)');
            $('#inventoryconnection').css('-o-filter', 'blur(0px)');
            $('#explorer').css('-o-filter', 'blur(0px)');
            $('#sewickleyacademy2').css('-o-filter', 'blur(0px)');
            $('#upmc').css('-o-filter', 'blur(0px)');
            $('#inventoryconnection').css('filter', 'blur(0px)');
            $('#explorer').css('filter', 'blur(0px)');
            $('#sewickleyacademy2').css('filter', 'blur(0px)');
            $('#upmc').css('filter', 'blur(0px)');
        },
        function(){
            if ($(window).width() > 991){
            $('#inventoryconnection').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#explorer').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy2').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#upmc').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#inventoryconnection').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#explorer').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy2').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#upmc').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#inventoryconnection').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#explorer').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy2').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#upmc').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#inventoryconnection').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#explorer').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy2').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#upmc').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#inventoryconnection').css('filter', 'blur(2px) grayscale(60%)');
            $('#explorer').css('filter', 'blur(2px) grayscale(60%)');
            $('#sewickleyacademy2').css('filter', 'blur(2px) grayscale(60%)');
            $('#upmc').css('filter', 'blur(2px) grayscale(60%)');
            }
        });
        
        $(".pro1-point").click(function(){
            scrollToAnchor('IGDesign');
        });
        
        $(".pro1-point").hover(function(){
            $('#instagram').css('-webkit-filter', 'blur(0px)');
            $('#polyart').css('-webkit-filter', 'blur(0px)');
            $('#myreceipts').css('-webkit-filter', 'blur(0px)');
            $('#yourcalc').css('-webkit-filter', 'blur(0px)');
            $('#facebook').css('-webkit-filter', 'blur(0px)');
            $('#aig').css('-webkit-filter', 'blur(0px)');
            $('#presentation').css('-webkit-filter', 'blur(0px)');
            $('#church').css('-webkit-filter', 'blur(0px)');
            $('#airhorn').css('-webkit-filter', 'blur(0px)');
            $('#finalschedule').css('-webkit-filter', 'blur(0px)');
            $('#clubw').css('-webkit-filter', 'blur(0px)');
            $('#instagram').css('-moz-filter', 'blur(0px)');
            $('#polyart').css('-moz-filter', 'blur(0px)');
            $('#myreceipts').css('-moz-filter', 'blur(0px)');
            $('#yourcalc').css('-moz-filter', 'blur(0px)');
            $('#facebook').css('-moz-filter', 'blur(0px)');
            $('#aig').css('-moz-filter', 'blur(0px)');
            $('#presentation').css('-moz-filter', 'blur(0px)');
            $('#church').css('-moz-filter', 'blur(0px)');
            $('#airhorn').css('-moz-filter', 'blur(0px)');
            $('#finalschedule').css('-moz-filter', 'blur(0px)');
            $('#clubw').css('-moz-filter', 'blur(0px)');
            $('#instagram').css('-ms-filter', 'blur(0px)');
            $('#polyart').css('-ms-filter', 'blur(0px)');
            $('#myreceipts').css('-ms-filter', 'blur(0px)');
            $('#yourcalc').css('-ms-filter', 'blur(0px)');
            $('#facebook').css('-ms-filter', 'blur(0px)');
            $('#aig').css('-ms-filter', 'blur(0px)');
            $('#presentation').css('-ms-filter', 'blur(0px)');
            $('#church').css('-ms-filter', 'blur(0px)');
            $('#airhorn').css('-ms-filter', 'blur(0px)');
            $('#finalschedule').css('-ms-filter', 'blur(0px)');
            $('#clubw').css('-ms-filter', 'blur(0px)');
            $('#instagram').css('-o-filter', 'blur(0px)');
            $('#polyart').css('-o-filter', 'blur(0px)');
            $('#myreceipts').css('-o-filter', 'blur(0px)');
            $('#yourcalc').css('-o-filter', 'blur(0px)');
            $('#facebook').css('-o-filter', 'blur(0px)');
            $('#aig').css('-o-filter', 'blur(0px)');
            $('#presentation').css('-o-filter', 'blur(0px)');
            $('#church').css('-o-filter', 'blur(0px)');
            $('#airhorn').css('-o-filter', 'blur(0px)');
            $('#finalschedule').css('-o-filter', 'blur(0px)');
            $('#clubw').css('-o-filter', 'blur(0px)');
            $('#instagram').css('filter', 'blur(0px)');
            $('#polyart').css('filter', 'blur(0px)');
            $('#myreceipts').css('filter', 'blur(0px)');
            $('#yourcalc').css('filter', 'blur(0px)');
            $('#facebook').css('filter', 'blur(0px)');
            $('#aig').css('filter', 'blur(0px)');
            $('#presentation').css('filter', 'blur(0px)');
            $('#church').css('filter', 'blur(0px)');
            $('#airhorn').css('filter', 'blur(0px)');
            $('#finalschedule').css('filter', 'blur(0px)');
            $('#clubw').css('filter', 'blur(0px)');
        },
        function(){
            if ($(window).width() > 991){
            $('#instagram').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#polyart').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#myreceipts').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#yourcalc').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#facebook').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#aig').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#presentation').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#church').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#airhorn').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#finalschedule').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#clubw').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#instagram').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#polyart').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#myreceipts').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#yourcalc').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#facebook').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#aig').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#presentation').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#church').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#airhorn').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#finalschedule').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#clubw').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#instagram').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#polyart').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#myreceipts').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#yourcalc').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#facebook').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#aig').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#presentation').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#church').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#airhorn').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#finalschedule').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#clubw').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#instagram').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#polyart').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#myreceipts').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#yourcalc').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#facebook').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#aig').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#presentation').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#church').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#airhorn').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#finalschedule').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#clubw').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#instagram').css('filter', 'blur(2px) grayscale(60%)');
            $('#polyart').css('filter', 'blur(2px) grayscale(60%)');
            $('#myreceipts').css('filter', 'blur(2px) grayscale(60%)');
            $('#yourcalc').css('filter', 'blur(2px) grayscale(60%)');
            $('#facebook').css('filter', 'blur(2px) grayscale(60%)');
            $('#aig').css('filter', 'blur(2px) grayscale(60%)');
            $('#presentation').css('filter', 'blur(2px) grayscale(60%)');
            $('#church').css('filter', 'blur(2px) grayscale(60%)');
            $('#airhorn').css('filter', 'blur(2px) grayscale(60%)');
            $('#finalschedule').css('filter', 'blur(2px) grayscale(60%)');
            $('#clubw').css('filter', 'blur(2px) grayscale(60%)');
            }
        });
        
        $(".blog-point").click(function(){
            scrollToAnchor('badcomp');
        });
    
        $(".blog-point").hover(function(){
            $('#post1').css('-webkit-filter', 'blur(0px)');
            $('#post2').css('-webkit-filter', 'blur(0px)');
            $('#post3').css('-webkit-filter', 'blur(0px)');
            $('#post4').css('-webkit-filter', 'blur(0px)');
            $('#post1').css('-moz-filter', 'blur(0px)');
            $('#post2').css('-moz-filter', 'blur(0px)');
            $('#post3').css('-moz-filter', 'blur(0px)');
            $('#post4').css('-moz-filter', 'blur(0px)');
            $('#post1').css('-ms-filter', 'blur(0px)');
            $('#post2').css('-ms-filter', 'blur(0px)');
            $('#post3').css('-ms-filter', 'blur(0px)');
            $('#post4').css('-ms-filter', 'blur(0px)');
            $('#post1').css('filter', 'blur(0px)');
            $('#post2').css('filter', 'blur(0px)');
            $('#post3').css('filter', 'blur(0px)');
            $('#post4').css('filter', 'blur(0px)');
        },
        function(){
            if ($(window).width() > 991){
            $('#post1').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#post2').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#post3').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#post4').css('-webkit-filter', 'blur(2px) grayscale(60%)');
            $('#post1').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#post2').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#post3').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#post4').css('-moz-filter', 'blur(2px) grayscale(60%)');
            $('#post1').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#post2').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#post3').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#post4').css('-ms-filter', 'blur(2px) grayscale(60%)');
            $('#post1').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#post2').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#post3').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#post4').css('-o-filter', 'blur(2px) grayscale(60%)');
            $('#post1').css('filter', 'blur(2px) grayscale(60%)');
            $('#post2').css('filter', 'blur(2px) grayscale(60%)');
            $('#post3').css('filter', 'blur(2px) grayscale(60%)');
            $('#post4').css('filter', 'blur(2px) grayscale(60%)');
            }
        });
    
        $(".clicked").click(function(){
            open=true;
            $('#popup-image').attr("src", "postimg/" + $(this).attr('id') + ".jpg");
            if($(this).attr('id') == "eduuc") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(eduuc[0]);
                $('#p-type').html(eduuc[1]);
                $('#p-subtype1').html(eduuc[2]);
                $('#p-subtype2').html(eduuc[3]);
                $('#p-subtype3').html(eduuc[4]);
                $('#p-body').html(eduuc[5]);
            }
            
            else if($(this).attr('id') == "edusa") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(edusa[0]);
                $('#p-type').html(edusa[1]);
                $('#p-subtype1').html(edusa[2]);
                $('#p-subtype2').html(edusa[3]);
                $('#p-subtype3').html(edusa[4]);
                $('#p-body').html(edusa[5]);
            }
            
            else if($(this).attr('id') == "educmu") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(educmu[0]);
                $('#p-type').html(educmu[1]);
                $('#p-subtype1').html(educmu[2]);
                $('#p-subtype2').html(educmu[3]);
                $('#p-subtype3').html(educmu[4]);
                $('#p-body').html(educmu[5]);
            }
            
            else if($(this).attr('id') == "edust") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(edust[0]);
                $('#p-type').html(edust[1]);
                $('#p-subtype1').html(edust[2]);
                $('#p-subtype2').html(edust[3]);
                $('#p-subtype3').html(edust[4]);
                $('#p-body').html(edust[5]);
            }
            
            else if($(this).attr('id') == "expic") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(expic[0]);
                $('#p-type').html(expic[1]);
                $('#p-subtype1').html(expic[2]);
                $('#p-subtype2').html(expic[3]);
                $('#p-subtype3').html(expic[4]);
                $('#p-body').html(expic[5]);
            }
            
            else if($(this).attr('id') == "expes") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(expes[0]);
                $('#p-type').html(expes[1]);
                $('#p-subtype1').html(expes[2]);
                $('#p-subtype2').html(expes[3]);
                $('#p-subtype3').html(expes[4]);
                $('#p-body').html(expes[5]);
            }
            
            else if($(this).attr('id') == "expsa") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(expsa[0]);
                $('#p-type').html(expsa[1]);
                $('#p-subtype1').html(expsa[2]);
                $('#p-subtype2').html(expsa[3]);
                $('#p-subtype3').html(expsa[4]);
                $('#p-body').html(expsa[5]);
            }
            
            else if($(this).attr('id') == "expupmc") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(expupmc[0]);
                $('#p-type').html(expupmc[1]);
                $('#p-subtype1').html(expupmc[2]);
                $('#p-subtype2').html(expupmc[3]);
                $('#p-subtype3').html(expupmc[4]);
                $('#p-body').html(expupmc[5]);
            }
            
            else if($(this).attr('id') == "projig") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projig[0]);
                $('#p-type').html(projig[1]);
                $('#p-subtype1').html(projig[2]);
                $('#p-subtype2').html(projig[3]);
                $('#p-subtype3').html(projig[4]);
                $('#p-body').html(projig[5]);
            }
            
            else if($(this).attr('id') == "projlpa") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projlpa[0]);
                $('#p-type').html(projlpa[1]);
                $('#p-subtype1').html(projlpa[2]);
                $('#p-subtype2').html(projlpa[3]);
                $('#p-subtype3').html(projlpa[4]);
                $('#p-body').html(projlpa[5]);
            }
            
            else if($(this).attr('id') == "projsr") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(projsr[0]);
                $('#p-type').html(projsr[1]);
                $('#p-subtype1').html(projsr[2]);
                $('#p-subtype2').html(projsr[3]);
                $('#p-subtype3').html(projsr[4]);
                $('#p-body').html(projsr[5]);
            }
            
            else if($(this).attr('id') == "projyc") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projyc[0]);
                $('#p-type').html(projyc[1]);
                $('#p-subtype1').html(projyc[2]);
                $('#p-subtype2').html(projyc[3]);
                $('#p-subtype3').html(projyc[4]);
                $('#p-body').html(projyc[5]);
            }
            
            else if($(this).attr('id') == "projfr") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projfr[0]);
                $('#p-type').html(projfr[1]);
                $('#p-subtype1').html(projfr[2]);
                $('#p-subtype2').html(projfr[3]);
                $('#p-subtype3').html(projfr[4]);
                $('#p-body').html(projfr[5]);
            }
            
            else if($(this).attr('id') == "projaig") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projaig[0]);
                $('#p-type').html(projaig[1]);
                $('#p-subtype1').html(projaig[2]);
                $('#p-subtype2').html(projaig[3]);
                $('#p-subtype3').html(projaig[4]);
                $('#p-body').html(projaig[5]);
            }
            
            else if($(this).attr('id') == "projrp") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projrp[0]);
                $('#p-type').html(projrp[1]);
                $('#p-subtype1').html(projrp[2]);
                $('#p-subtype2').html(projrp[3]);
                $('#p-subtype3').html(projrp[4]);
                $('#p-body').html(projrp[5]);
            }
            
            else if($(this).attr('id') == "projcw") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(projcw[0]);
                $('#p-type').html(projcw[1]);
                $('#p-subtype1').html(projcw[2]);
                $('#p-subtype2').html(projcw[3]);
                $('#p-subtype3').html(projcw[4]);
                $('#p-body').html(projcw[5]);
            }
            
            else if($(this).attr('id') == "projuh") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projuh[0]);
                $('#p-type').html(projuh[1]);
                $('#p-subtype1').html(projuh[2]);
                $('#p-subtype2').html(projuh[3]);
                $('#p-subtype3').html(projuh[4]);
                $('#p-body').html(projuh[5]);
            }
            
            else if($(this).attr('id') == "projfg") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(projfg[0]);
                $('#p-type').html(projfg[1]);
                $('#p-subtype1').html(projfg[2]);
                $('#p-subtype2').html(projfg[3]);
                $('#p-subtype3').html(projfg[4]);
                $('#p-body').html(projfg[5]);
            }
            
            else if($(this).attr('id') == "projuw") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'black');
                $('#p-heading').html(projuw[0]);
                $('#p-type').html(projuw[1]);
                $('#p-subtype1').html(projuw[2]);
                $('#p-subtype2').html(projuw[3]);
                $('#p-subtype3').html(projuw[4]);
                $('#p-body').html(projuw[5]);
            }
            
            else if($(this).attr('id') == "blogbwc") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(blogbwc[0]);
                $('#p-type').html(blogbwc[1]);
                $('#p-subtype1').html(blogbwc[2]);
                $('#p-subtype2').html(blogbwc[3]);
                $('#p-subtype3').html(blogbwc[4]);
                $('#p-body').html(blogbwc[5]);
            }
            
            else if($(this).attr('id') == "blogdaw") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(blogdaw[0]);
                $('#p-type').html(blogdaw[1]);
                $('#p-subtype1').html(blogdaw[2]);
                $('#p-subtype2').html(blogdaw[3]);
                $('#p-subtype3').html(blogdaw[4]);
                $('#p-body').html(blogdaw[5]);
            }
            
            else if($(this).attr('id') == "blogphb") {
                $('.popup-image').css('object-position', '');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(blogphb[0]);
                $('#p-type').html(blogphb[1]);
                $('#p-subtype1').html(blogphb[2]);
                $('#p-subtype2').html(blogphb[3]);
                $('#p-subtype3').html(blogphb[4]);
                $('#p-body').html(blogphb[5]);
            }
            
            else if($(this).attr('id') == "blogrsl") {
                $('.popup-image').css('object-position', '0 0');
                $('#close-popup').css('color', 'white');
                $('#p-heading').html(blogrsl[0]);
                $('#p-type').html(blogrsl[1]);
                $('#p-subtype1').html(blogrsl[2]);
                $('#p-subtype2').html(blogrsl[3]);
                $('#p-subtype3').html(blogrsl[4]);
                $('#p-body').html(blogrsl[5]);
            }
            
            
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
            
        }); 
    
        $("#close-popup").click(function(){
            open = false;
            $('#contains').css("position", "relative");
            $('#contains').css("height", "");
            $('#contains').css("width", "");
            $('#popup').fadeOut(500);
            $('.pop-back').fadeOut(500);
            $('#the-hr').css('border-color', '#eeeeee');
            if($('#p-heading').html() =="University of Chicago"){                              
                scrollToAnchor('UofC');
            }
            if($('#p-heading').html() =="Sewickley Academy"){                              
                scrollToAnchor('anch2');
            }
            if($('#p-heading').html() =="Carnegie Mellon University"){                              
                scrollToAnchor('anch3');
            }
            if($('#p-heading').html() =="Fourteen Languages"){                              
                scrollToAnchor('anch4');
            }
            if($('#p-heading').html() =="Inventory Connection, LLC"){                              
                scrollToAnchor('IC');
            }
            if($('#p-heading').html() =="ExplORer Surgical"){                              
                scrollToAnchor('anch6');
            }
            if($('#p-heading').html() =="Sewickley Academy (again)"){                              
                scrollToAnchor('anch7');
            }
            if($('#p-heading').html() =="University of Pittsburgh Medical Center Children's Hospital"){                              
                scrollToAnchor('anch8');
            }
            if($('#p-heading').html() =="Instagram Logo Re-Design"){                              
                scrollToAnchor('IGDesign');
            }
            if($('#p-heading').html() =="Low Polygon Art"){                              
                scrollToAnchor('anch10');
            }
            if($('#p-heading').html() =="Smart Receipts"){                              
                scrollToAnchor('anch11');
            }
            if($('#p-heading').html() =="Calc Color"){                              
                scrollToAnchor('anch12');
            }
            if($('#p-heading').html() =="Facebook Re-Design"){                              
                scrollToAnchor('anch13');
            }
            if($('#p-heading').html() =="Accident Report"){                              
                scrollToAnchor('anch14');
            }
            if($('#p-heading').html() =="Research Presentation"){                              
                scrollToAnchor('anch15');
            }
            if($('#p-heading').html() =="St. Mary's Coptic Church's Website"){   
                scrollToAnchor('anch16');
            }
            if($('#p-heading').html() =="Ultimate Horn"){                              
                scrollToAnchor('anch17');
            }
            if($('#p-heading').html() =="Finals Generator"){                              
                scrollToAnchor('anch18');
            }
            if($('#p-heading').html() =="Unaccompanied Women Concert Poster"){   
                scrollToAnchor('anch19');
            }
            if($('#p-heading').html() =="Why am I 'terrible' with computers?"){   
                scrollToAnchor('badcomp');
            }
            if($('#p-heading').html() =="How do mobile apps really work?"){   
                scrollToAnchor('anch21');
            }
            if($('#p-heading').html() =="Could you power your house with your bike?"){
                scrollToAnchor('anch22');
            }
            if($('#p-heading').html() =="How much fun would it be to run at the speed of light?"){   
                scrollToAnchor('anch23');
            }
        }); 
    
        $(".about-point").click(function(){
            open=true;
            $('#popup-image').attr("src", "postimg/about.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(about[0]);
            $('#p-type').html(about[1]);
            $('#p-subtype1').html(about[2]);
            $('#p-subtype2').html(about[3]);
            $('#p-subtype3').html(about[4]);
            $('#p-body').html(about[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }); 
    
        $(".contact-point").click(function(){
            open=true;
            $('#the-hr').css('border-color', 'white');
            $('#popup-image').attr("src", "postimg/contact.jpg");
            $('.popup-image').css('object-position', '');
            $('#close-popup').css('color', 'white');
            $('#p-heading').html(contact[0]);
            $('#p-type').html(contact[1]);
            $('#p-subtype1').html(contact[2]);
            $('#p-subtype2').html(contact[3]);
            $('#p-subtype3').html(contact[4]);
            $('#p-body').html(contact[5]);
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
        }); 
    
        function scrollToAnchor(aid){
            var aTag = $("a[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top},'slow');
        }
    
        $(".card").hover(function(){
            if ($(window).width() > 991){
                $(this).css('-webkit-filter', 'blur(0px)');
                $(this).css('-moz-filter', 'blur(0px)');
                $(this).css('-ms-filter', 'blur(0px)');
                $(this).css('-o-filter', 'blur(0px)');
                $(this).css('filter', 'blur(0px)');
            }
        },
        function(){
            if ($(window).width() > 991){
                $(this).css('-webkit-filter', 'blur(2px) grayscale(60%)');
                $(this).css('-moz-filter', 'blur(2px) grayscale(60%)');
                $(this).css('-ms-filter', 'blur(2px) grayscale(60%)');
                $(this).css('-o-filter', 'blur(2px) grayscale(60%)');
                $(this).css('filter', 'blur(2px) grayscale(60%)');
            }
        });
        $("#me").hover(function(){
            if ($(window).width() > 991){
                $(this).css('-webkit-filter', 'blur(0px)');
                $(this).css('-moz-filter', 'blur(0px)');
                $(this).css('-ms-filter', 'blur(0px)');
                $(this).css('-o-filter', 'blur(0px)');
                $(this).css('filter', 'blur(0px)');
            }
        },
        function(){
            if ($(window).width() > 991){
                $(this).css('-webkit-filter', 'blur(0px)');
                $(this).css('-moz-filter', 'blur(0px)');
                $(this).css('-ms-filter', 'blur(0px)');
                $(this).css('-o-filter', 'blur(0px)');
                $(this).css('filter', 'blur(0px)');
            }
        });
        
});