import Map from "./NewMap"
function Footer() {
    const address = '726 Peach Street, Lakeside Marblehead, Ohio';
    return (
        <footer>
            <div className="contact">
                <div>
                    <div className="inside-sm flex-md">
                        <div className="fifty text-center">
                            <h4>Contact Us</h4>
                            <p>Email</p>
                            <p><a href="mailto:justpeachy@gmail.com">justpeachy@gmail.com</a></p>
                        </div>
                        <div className="fifty text-center">
                            <h4>Address</h4>
                            <p>{address}</p>
                            <p><a target="_blank" href="https://www.google.com/maps/place/726+Peach+St,+Lakeside+Marblehead,+OH+43440/@41.5396206,-82.7476773,17z/data=!3m1!4b1!4m6!3m5!1s0x883a5005296d7737:0xb00aaf41771e975a!8m2!3d41.5396206!4d-82.7451024!16s%2Fg%2F11c2cdtdc6?entry=ttu">Directions</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Map address={address} />
        </footer>
    )
}

export default Footer