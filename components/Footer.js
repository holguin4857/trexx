import Link from "next/link";

export default function Footer () {
    return ( 
        <>
        <footer className="footer">
          <div className="cont">
            <div className="row">
             
             
             
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