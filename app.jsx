export default function App() {
    return (
      <div>
      <header>
        <center><h1 className="logo">Aquari<sup>&copy;</sup></h1></center>
        <br/>
        <div className="header-navbar">
            <a href="home_page.html" className="active">Home</a>
            <a href="collection.html">My Collection</a>
            <a href="beginners_faq.html">Tutorial</a>
            <a href="advanced_research.html">Research</a>
            <a href="simulator.html">Simulator</a>
            <a href="sell.html">Sell</a>
            <a href="community_page.html">Community</a>
            <a href="post_view.html">Post</a>
            <a onclick="logout()">Sign Out</a>
        </div>
    </header>
  
        <main>App components go here</main>
  
        <footer>
        <div className="navbar">
            <a href="contact.html">Contact Us</a>
            <a href="https://github.com/LizzieMerrill/startup">GitHub</a>
            <a href="terms_and_privacy.html">Terms and Conditions</a>
        </div>
    </footer>
        </div>
    );
  }