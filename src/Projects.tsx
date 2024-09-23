const Projects = () => {
  return (
    <div className='projects'>
        <h3>Disease-Prediction Wearable Device</h3>
        Currently, I am working with Duke University's <a href="https://dunn.pratt.duke.edu/">Big Ideas Lab</a> to create a research-focused wearable device capable of monitoring health data at a finer level than commercial solutions allow. Specifically, I work on the low-level wireless communication effort between the wearable and companion mobile app to upload data for processing. Data can then be viewed and analyzed for infection and disease prediction research.

        <h3>Google Drive Quick Look Preview</h3>
        A simple Finder extension to preview a Google Docs <code>.gdoc</code> file without needing to open it. (<a href="https://github.com/lukeredmore/google-drive-ql-preview">GitHub</a>)

        <h3>32-bit MIPS-style Processor RTL Design</h3>
        A Turing-complete, 32-bit CPU in structural and system Verilog with a complete MIPS-style instruction set, enabling execution of arbitrary assembly programs. Implemented with 5-stage pipelining with full bypassing to achieve significant performance gains while avoiding stalls. (<a href="https://github.com/lukeredmore/Processor">GitHub</a>)
        
        <h3>“Simon” Game</h3>
        To validate the above CPU, I designed, programmed, and assembled an end-to-end recreation of the classic electronic memory game “Simon”. It ran on Artix-7 FPGA hardware with multiple I/O peripherals and a 50 MHz clock. Fun fact—because the hardware implements a custom instruction set, it was near-impossible to diagnose between hardware and software bugs. As a result, I also had to implement the same ISA in Python in order to debug effectively. (<a href="https://github.com/lukeredmore/Simon-Game">GitHub</a>) {/* TODO: Video? */}

        <h3>Autonomous Rover</h3>
        A self-driving RC vehicle capable of tracking and following known objects, implemented with real time monitoring and control systems in response to complicated driving conditions such as blind corners and temporary loss of object.

        <h3>Mobile app for Sakai LMS</h3>
        A passion project to bring Duke University's Sakai LMS to a mobile interface (and to teach me SwiftUI!). (<a href="https://github.com/lukeredmore/DukeSakaiMobile">GitHub</a>)

        <h3>Web-based solution for employee management and time tracking</h3>
        Worked with <a href="https://progressivedentalny.com/">Progressive Dental</a> to build an HR management solution applicable to the needs of a medium-sized business without all the sales overhead and hassle of a more established solution, especially since they often require customers to pay for more features than they need. As a bespoke, web-based solution, I was able to deliver a modern, streamlined experience with the goal of helping management spend the <em>least</em> amount of time possible on the platform.

        <h3>Centralized Drone Command Center</h3>
        A centralized drone command center incorporating video livestream, GPS tracking, and a purpose-built piloting interface. Using a larger drone as the “mothership”, smaller drones were deployed and piloted using the mothership as a WiFi relay to allow for beyond-line-of-sight flight for rainforest exploration. (<a href="https://github.com/lukeredmore/DukeXPrizeAnafiGUI">GitHub</a>)

        <h3>Solar Panel Soiling Sensor</h3>
        A small, fully enclosed device to measure the particle accumulation atop solar panels. A small camera sits under the glass top of the device (adjustable to the same angle of adjacent solar panels) and frequently photographs the accumulated particles, uploading them to a companion website over WiFi. From there, analysis is done on the collection of photographs to determine when cleaning is necessary. (<a href="https://github.com/lukeredmore/soiling-sensor">GitHub</a>) {/* TODO: Video? */}
        
        <h3>Mobile app for Catholic Schools of Broome County</h3>
        An iOS and Android application integrated with the website for my former high school bringing calendars, lunch menus, parent communication, and more to a simple mobile interface. I started this after hearing many complaints about the school's website, which was heavily focused on development and admissions rather than everyday needs of students and families who attended my school. This was one of my very first programming projects, and really the catalyst that got me into this line of work :) (GitHub for <a href="https://github.com/lukeredmore/CSBC">iOS</a> and <a href="https://github.com/lukeredmore/CSBCandroid">Android</a>)
        
        <h3>Mobile app for Newman House of Binghamton University</h3>
        This was some volunteer work I did for a Catholic organization at Binghamton University. This mobile app brings together mass times, events, announcements, and donation opportunities all in one place for easy and convenient access. (<a href="https://github.com/lukeredmore/BUNewmanHouse">GitHub</a>)

      {/* TODO: Languages, images, demos, find a better order, tags? */}
</div>
  )
}

export default Projects
