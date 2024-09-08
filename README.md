# BandWay

*Where Music Meets Vacation* 

<img src="https://github.com/user-attachments/assets/bee8fed1-3647-45c9-a895-9b7e34c6df4c" alt="image" height="274" width="300"/>
<img src="https://github.com/user-attachments/assets/2fef98d8-1d89-4af0-af87-00114681f66c" alt="image" height="274" width="300"/>

## Description

BandWay is a one-of-a-kind concert vacation planning platform designed to simplify and enhance the experience of organizing and attending music events. By leveraging modern web frameworks, BandWay offers personalized concert recommendations, seamless booking for tickets, accommodations, and travel, and comprehensive trip management tools. With features like email alerts for new concerts and deals, BandWay provides a user-friendly, all-in-one solution for music fans to plan unforgettable concert vacations effortlessly.

## Features

- **Provides a unified, intelligent platform** to streamline the entire planning process.
- **Facilitates seamless booking** for concert tickets, hotels, and transportation.
- **Ensures a hassle-free and enjoyable** concert vacation planning experience.
- **Keeps you informed with real-time updates** on event changes, venue details, and travel logistics.

## Live Application

Access the live application here: **[BandWay Cloud Application](https://bandway-client-z732mhjgfq-uc.a.run.app)**

## Marketing Video

Check out our marketing video here: **[Watch on YouTube](https://youtube.com/shorts/pmEze2Bq8l0?si=EOYr60jBp9MtDe0X)**

## Tech Stack

- **Frontend**: React (MUI, TypeScript)
- **Backend**: Java Spring Boot
- **Cloud**: GCP Cloud
- **Database**: PostgreSQL
- **APIs**: Integrating with third-party services like Ticketmaster, Spotify, RapidAPI, SkyScanner,and Gmail SMTP for email notifications.

## Getting Started

### Prerequisites

- Docker
- Node.js
- Java 17
- PostgreSQL
- Maven

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-repo/bandway.git
   ```

2. Install the necessary dependencies:
   
   ```bash
   cd Bandway\client\BandWayClient
   npm install
   
   cd ..\..\server
   mvn install package
   ```

3. Set up the backend and PostgreSQL database (Java Spring Boot):
   
   - Configure the `application.properties` with your GCP Cloud SQL credentials, API keys, and email settings.

4. Start the development server:
   
   ```bash
   npm start
   java -jar .\target\bandway-1.0.0.jar
   ```
   
   > There is an option to dockerize the client and the server and run them.

5. Access the local application at `http://localhost:5173` or visit the live cloud-hosted version at **[BandWay Cloud Application](https://bandway-client-z732mhjgfq-uc.a.run.app)**.


## Swagger API Documentation

- **[Swagger API Doc](https://server-z732mhjgfq-uc.a.run.app/swagger-ui/index.html#)**

## Documentation

- **[Product Document](https://mailmtaac-my.sharepoint.com/:b:/g/personal/talym_mta_ac_il/ESBXhinDvE1DpudQ36Ei9koBHYXHTKmPFWpIzXCHu_toag?e=OTkQXH)**
- **[User Guide](https://mailmtaac-my.sharepoint.com/:b:/g/personal/talym_mta_ac_il/EZMVqxh21u9CqIJX8eGMjb0BTq0FlIGiMidk95Dlvumg4w?e=WmSXKP)**
- **[Presentation](https://mailmtaac-my.sharepoint.com/:p:/g/personal/talym_mta_ac_il/EVEfyQUa71lDqQtN5_6iws4BJZoXyfVXtQfylwOXgVcxiQ?e=8yYcUu)**
- **[Demo - Ticket and Vacation](https://mailmtaac-my.sharepoint.com/:v:/g/personal/talym_mta_ac_il/EUpkFJsbXtJPpzTXG--yKbIBijsA46bOfcfQVCyqfMh8eg?e=PFpugB)**
- **[Demo - Sign Up and Sign In](https://mailmtaac-my.sharepoint.com/:v:/g/personal/talym_mta_ac_il/EergGfwADPtPvyML77CulNUB0skEDoECKTt4B8bUBgm1-w?e=JmaRtX)**
- **[Demo - Subscribe and Unsubscribe](https://mailmtaac-my.sharepoint.com/:v:/g/personal/talym_mta_ac_il/EUwoIMS5e7pFusU1nU-NM00BgSeBowWw0Ybfvu9t7Dkkgw?e=MV0hsf)**

## Design

- **[Figma Design](https://www.figma.com/proto/Pe54uo0nqRd0bd4fhXfL1Q/Website-BandWay?type=design&node-id=1-2&t=bPmwIYfFB6Imb2ZV-1&scaling=min-zoom&page-id=0%3A1&mode=design)**

## Development Roadmap

- Check the [Timeline](https://github.com/users/idobi111/projects/1) for project milestones, features in progress, and future goals.

## Limitations
### Low Resolution Hotel Image 
- Reference:
https://rapidapi.com/ntd119/api/booking-com18/discussions/137532
- Limitation:
The Booking.com API currently provides images that are small and of low resolution.
- Impact:
When these images are scaled up, they appear blurry and of poor quality, which 
negatively affects the visual appeal and user experience in applications using these 
images.
- Developer's Response:
The issue is recognized by the developer.
A solution is being worked on, and users will be informed when the problem is resolved.


## Contributing

We welcome contributions from the community. Please fork the repository, create a new branch, and submit a pull request with detailed information about your changes.

## Contributors

- **Ido Bitton**  
  
  - [GitHub](https://github.com/idobi111)  
  - [LinkedIn](https://www.linkedin.com/in/ido-bitton-b8a298163/)

- **Tal Yamin**  
  
  - [GitHub](https://github.com/TalYamin)  
  - [LinkedIn](https://www.linkedin.com/in/tal-yamin-5a478a173/)
