import Link from "next/link";

export default function Footer () {
    return ( 
        <>
        <footer className="footer">
          <div className="cont">
            <div className="row">
              <div className="footer-col">
                <h4>Terms</h4>
                <ul>
                  <li><Link href="terms">Terms and conditions</Link></li>
                  <li><Link href="pri">Privacy policy</Link></li>
                  
                </ul>
              </div>
              <div className="footer-col">
                <h4>About</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="about">About</Link></li>
                  <li><Link href="contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Booking</h4>
                <ul>
                  <li><Link href="work">Work</Link></li>
                  <li><Link href="how">FAQ</Link></li>
                  
                </ul>
              </div>
              <div className="footer-col">
                <h4>Follow</h4>
                <ul>
                  <li><Link href="https://www.facebook.com/TrexcoShipping/">Facebook</Link></li>
                  <li><Link href="https://twitter.com/trexcoshipping">Twitter</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        
        </>
    )
}