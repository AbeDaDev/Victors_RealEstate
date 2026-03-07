
function Contact(){

    return(
        <>
           
            <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.578961060278!2d-117.57442922306764!3d34.10592501489161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c335e0bef41351%3A0x6d6c7f146ac9ba77!2s10681%20Foothill%20Blvd%20Suite%20140%2C%20Rancho%20Cucamonga%2C%20CA%2091730!5e0!3m2!1sen!2sus!4v1772842946504!5m2!1sen!2sus"
                width="1000"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location"
                className="map-iframe"
            ></iframe>
            </div>
        </>
        
    )
}

export default Contact 

