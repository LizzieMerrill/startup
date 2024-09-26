## Domain Name:
aquariapp.com



## URL
http://54.161.140.228/ OR http://aquariapp.com/ OR http://*.aquariapp.com/, where * is any viable text

### 10/29/23: Midterm Study Guide
- In the following code, what does the link element do? LINK elements describe relationships between the current html file and an external source, such as a stylesheet or a site icon.
- In the following code,  what does a div tag do? DIV tags are containers that simply section off different sections/divisions of code.
- In the following code, what is the difference between the #title and .grid selector? #title selector selects by ID, .grid selector selects by class.
- In the following code, what is the difference between padding and margin? Padding represents the amount of inner space an element has, while the margin is whitespace available surrounding an element. It's not possible to set padding to auto padding. However, you can use automatic settings for margins. It's not possible to use negative values when defining padding, but you can with margins.
- Given this HTML and this CSS how will the images be displayed using flex?
- What does the following padding CSS do? Padding is used to create space around an element's content, inside of any defined borders.
- What does the following code using arrow syntax function declaration do? An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions. Arrow functions and function declarations / expressions are not equivalent and cannot be replaced blindly.
If the function you want to replace does not use this, arguments and is not called with new, then yes.
- What does the following code using map with an array output? The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. 
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

- What does the following code output using getElementByID and addEventListener?
The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).
- What does the following line of Javascript do using a # selector?
- Which of the following are true? (mark all that are true about the DOM)
- By default, the HTML span element has a default CSS display property value of: Since span elements are rendered using display: inline by default, the two width CSS properties are ignored
- How would you use CSS to change all the div elements to have a background color of red?
- How would you display an image with a hyperlink in HTML? 
<a href="https://www.educative.io" target="_blank">
      <img src="https://www.educative.io/static/imgs/logos/logoMarkv2.png">
    </a>
- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
The layers are, in order from inside to outside: Padding. Border. Margin.
- Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
- What will the following code output when executed using a for loop and console.log?
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- How do you declare the document type to be html?
- What is valid javascript syntax for if, else, for, while, switch statements?
- What is the correct syntax for creating a javascript object?
var <object-name> = { key1: value1, key2: value2,...};
- Is is possible to add new properties to javascript objects?
Using Object.defineProperty() Method
- If you want to include JavaScript on an HTML page, which tag do you use?
<script> and </script>
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- Which of the following correctly describes JSON?
Both JSON and XML can be parsed and used by lots of programming languages.
Both JSON and XML are hierarchical (values with values)

 Explanation:  JSON and XML are not human readable, JSON is shorter than XML.
- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? 
- Which of the following console command creates a remote shell session?
Use the New-PSSession cmdlet to create a persistent session on a remote computer.
- Which of the following is true when the -la parameter is specified for the ls console command?
To get a full list of hidden files, type ls -la in your terminal. The output displays information about the user, size of the file, and date and time of modification.
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? subdomain.domainname.topleveldomain, root domain = 'domainname.topleveldomain'
- Is a web certificate is necessary to use HTTPS. an SSL certificate is necessary for an HTTPS web address.
- Can a DNS A record can point to an IP address or another A record. To set up an A record on your domain all you'll need is an IP address to point it to. A blank record (sometimes seen as the '@' record) points your main domain to a server. You can also set subdomains to point to other IP addresses as well, if you run multiple webservers. Yes! You can absolutely create multiple A records on your DNS to point your domain to multiple IP addresses. However, you cant dictate which is used first. The domain will resolve to all of the IP's, but the visitors browser will randomly access one of the IP addresses.
- Port 443, 80, 22 is reserved for which protocol? port 80 is used for HTTP traffic, port 443 is used for HTTPS (HyperText Transfer Protocol Secure) traffic, 22	SSH/TCP
- What will the following code using Promises output when executed?
 





### 10/27/23: Simon CSS
I was able to get Simon CSS deployed to production. I learned that the console can be very difficult if you do not know which directory you are in AGAIN. I am afraid I did my simon HTML wrong, so I'll have to check that.


### 10/3/23: Simon HTML
I was able to get Simon HTML into my VS code and started on my project. I learned that the console can be very difficult if you do not know which directory you are in.



### 9/27/23
Public IPv4 address: 54.174.64.86

ELASTIC IP: 54.161.140.228

IPv4 address for eth0: 172.31.90.208

Command to ssh into server: 


ssh -i ~/downloads/yellow56.pem ubuntu@aquariapp.com


OR


ssh -i ~/downloads/yellow56.pem ubuntu@54.174.64.86

Deploy Command:

./deployReact.sh -k ~/Downloads/yellow56.pem -h aquariapp.com -s startup



### First
I refreshed my memory on how i can use git, github and vs code in harmony (I am certified in web development so this is not new to me)
