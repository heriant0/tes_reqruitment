# Simple Job List


## Instalasi

1. Install project "npm install"
2. Setup connection and put all variavle in .env file.


## Endpoint

| Endpoint | Description |
| -------- | --------- |
| `/register` | Register user |
| `/login` | Login before access the endpoint |
| `/joblist` | Endpoint to get job list |
| `/joblistdetails/{id}` | Endpoint to get spesifict job list by positon id|


## Contoh

**POST** `/resgister`
### Request
```http
POST /register HTTP/1.1
Host:
```

```
{
    "firstName": "herianto",
    "lastName": "",
    "email": "heri@mail.com",
    "password": "pass123",
    "role": "admin"
}
```

### Response
```
{
    "statusCode": 201,
    "message": "User sucesfully register"
}
```

**POST** `/login`
### Request
```http
POST /login HTTP/1.1
Host:
```

```
{
    "email": "heri@mail.com",
    "password": "pass123"
}
```

### Response
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiaGVyaUBtYWlsLmNvbSIsImlhdCI6MTY4NDkxODU2M30.s6N37wEK5Hw6eACu8-NMh0205VfFs9Qsq9UiuoTogEs",
    "email": "heri@mail.com"
}
```

**GET** `/joblist`
### Request Headers
| Header          | Description                              |
|-----------------|------------------------------------------|
| `access_token` | Token otorisasi untuk mengakses API       |

### Request
```http
POST /joblist HTTP/1.1
Host:
```

| Parameter   | Description                          |
|-------------|------------------------------------|
| `description`   | A search term, such as "ruby" or "java"|
| `location`      | A city name, zip code, or other location search term|
| `full_time`     | If you want to limit results to full time positions set this parameter to 'true', defaul is false|
| `page`          | Pagination|


### Response
```
{
    "statusCode": 200,
    "message": "Successfully get data",
    "data": [
        {
            "id": "f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
            "created_at": "Tue May 18 09:52:30 UTC 2021",
            "company": "Blindside",
            "company_url": "https://www.blindside.pro",
            "location": "Berlin",
            "title": "Flutter Developer",
            "description": "<p>Blindside is a sports tech start up from Berlin-Adlershof. Professional and amateur coaches and clubs boost their practices with our web and mobile app. We are striving to become the global sport platform, on which coaches exchange their experience, get inspired, and enable their athletes to develop in the best way possible.</p>\n<p>We are currently optimizing our mobile app, reinforcing our infrastructure and in the initial stages of a sports training analytics engine. We ship code often with continuous deployment and do most of our work in Python, Flutter/Dart, and React.</p>\n<p>As our focus shifts more heavily toward mobile development, Blindside are looking for an experienced mobile developer with professional working experience using Flutter.</p>\n<p><strong>Tasks</strong></p>\n<ul>\n<li>You will be immersed into a highly autonomous environment.</li>\n<li>You will design new features and build &amp; maintain within our existing codebase in Flutter</li>\n<li>You will constantly be learning new skills. Researching, conducting trial &amp; error experiments as well as maintaining full ownership of your code, from concept to deployment.</li>\n<li>In your first month, you will be familiarized with our team and have already resolved some bugs and small requests. Your code has gone live multiple times in the first month.</li>\n<li>In the following months, your knowledge of our codebase has drastically increased and you are offering your help in fundamental software architecture decisions. You also feel confident enough to suggest improvement to the team's workflow when you see it doesn't work.</li>\n<li>At the end of your first year, you have successfully contributed to a wide range of projects, even spanning across multiple elements of our system, from backend to mobile. You have established yourself as a self starter and clearly spoken member of our team.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Strong technical background (5+ years) in mobile development (Android or iOS), preferably professional experience working in Flutter</li>\n<li>Ideally you have experience in other areas of software development outside of mobile (backend, frontend, infrastructure, etc.)</li>\n<li>You can comfortably propose technical solutions to business problems and clearly communicate them to your colleagues.</li>\n<li>You are transparent, mindful and empathetic towards your teammates.</li>\n<li>You can easily express your ideas in written and spoken English</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>The opportunity to establish yourself as a core member of the development team</li>\n<li>An international team with a wide range of backgrounds</li>\n<li>A salary that matches industry standards</li>\n<li>A respectful atmosphere with a focus on professionalism</li>\n<li>A family-friendly work environment</li>\n<li>State of the art equipment to ensure that you can focus on the right things</li>\n<li>Daily paid lunch at our local canteen</li>\n<li>Yearly budget for individual professional development</li>\n</ul>\n",
            "how_to_apply": "<p><a href=\"https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper\">https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper</a></p>\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--23cbad69864ba3e2e6614bda12beda0b08c03c68/blindside.jpg"
        }
    ]
}
```

**GET** `/joblistdetails`
### Request Query
| Header          | Description                                |
|-----------------|------------------------------------------|
| `id` | position id       |

### Request
```http
POST /joblistdetails HTTP/1.1
Host:
```

### Response
```
{
    "statusCode": 200,
    "message": "Successfully get data",
    "data": {
        "id": "ed80af1f-d0bb-43ef-8bb4-9eab63fc41ec",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/ed80af1f-d0bb-43ef-8bb4-9eab63fc41ec",
        "created_at": "Tue May 18 16:12:42 UTC 2021",
        "company": "Car Registration, Inc. ",
        "company_url": null,
        "location": "Elk Grove, Ca - REMOTE",
        "title": "Software Architect/Developer",
        "description": "<p>Car Registration, Inc.</p>\n<p>Car Registration, Inc. (CRI) provides comprehensive, online vehicle registration and titling services for consumers who desire or need a DMV alternative.  Currently licensed and bonded under the California DMV’s Business Partner Automation program, CRI successfully processes over 250,000 transactions per year while reducing wait times and allowing the CA DMV to reallocate its resources to other services and administrative tasks.  With CRI, customers can get same-day processing, next-day delivery, and comprehensive telephone and email support.  Through its website, CRI collects fees from vehicle owners, transmits fees to the DMV in real-time, and issues registration cards and stickers to the customer via USPS or express courier.</p>\n<p>Job Description\nCRI is a leader in providing consumers direct access to DMV services through our online technology. We provide customers the ability to skip the line at the DMV by using our online platform to renew, replace, or transfer their vehicle registration and title. You will join a small but profitable start-up with the ability to shape and grow our software. We are looking for a self-motivated software architect/developer who is comfortable working on a cloud-based full-stack built with Go, PHP, and JavaScript for both customer-facing and internal applications. In your role, you will join a small team of software developers to build new software, new features, and maintain existing functionality.</p>\n<p>This is a full-time remote position with a competitive salary and benefits including medical, dental, vision, 401K plan, and more. We are based in Elk Grove, CA. Though you won’t work in the office, we regularly communicate via Slack and Google Meets. Our annual holiday party is fun and inclusive and offers a great opportunity to catch up with the team in person.</p>\n<p>Skills &amp; Requirements\n●\tAbility to design and implement solutions to both frontend and backend problems from a non-technical specification into a finished feature\n●\t3+ years professional coding with Go, PHP, Python, Ruby, or another server-side scripting language\n●\t2+ years professional coding with JavaScript\n●\t3+ years professional experience with SQL database design (PostgreSQL, MySQL, Oracle, or MSSQL)\n●\tExperience integrating RESTful and/or gRPC APIs\n●\tExperience with DevOps practices including infrastructure as code, continuous integration, monitoring, and logging\n●\tComfortable developing in a Mac or Linux environment\n●\tFamiliarity with event-based functional architectures\n●\tFamiliarity with MVC or MVVM architectures\n●\tSecurity-conscious best practices in any software built\n●\tTeam lead experience</p>\n<p>Desirable Qualifications\n●\t1+ year professional coding with the Go language\n●\tExperience with cloud-based distributed systems on providers such as AWS\n●\tExperience with docker or container technologies\n●\tExperience with CDNs\n●\tExperience developing web-based business applications with complex workflows\n●\tDatabase administration experience including setting up and maintaining replication servers\n●\tBachelor’s degree, preferably in Computer Science or related discipline</p>\n<p>If you are interested, please send your resume to <a href=\"mailto:Jobs@carregistration.com\">Jobs@carregistration.com</a>.</p>\n<p>CANDIDATES only, please.</p>\n<p>Equal Opportunity Employer\nCRI is an equal opportunity employer to all, regardless of age, ancestry, color, disability (mental and physical), exercising the right to family care and medical leave, gender, gender expression, gender identity, genetic information, marital status, medical condition, military or veteran status, national origin, political affiliation, race, religious creed, sex (includes pregnancy, childbirth, breastfeeding, and related medical conditions), and sexual orientation.</p>\n<p>It is an objective of CRI to achieve a drug-free workplace. Any applicant for employment will be expected to behave in accordance with this objective.</p>\n",
        "how_to_apply": "<p>If you are interested, please send your resume to <a href=\"mailto:Jobs@carregistration.com\">Jobs@carregistration.com</a>.  CANDIDATES only, please.</p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaG1qIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e3201f4f336dce8ebdee4d47073fde54081a827a/CRI%20FLSP%20Logo.png"
    }
}
```  
