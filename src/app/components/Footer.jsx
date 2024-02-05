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
                            <p><a href="mailto:justpeachy@gmail.com">Directions</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Map address={address} />
        </footer>
    )
}

export default Footer