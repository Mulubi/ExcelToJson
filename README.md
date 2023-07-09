<h1 align="left"> Excel to MongoDB Converter</h1>
<h2 align="left"> Overview </h2>
<p> The Excel to MongoDB Converter is an open-source project designed to facilitate the process of converting Excel data into JSON format and importing it into a MongoDB database. This project aims to streamline data management and integration within any domain that deals with large amounts of data stored in Excel files. </p>

<h2 align="left"> Purpose </h2>
<p>The purpose of this project is to provide a simple and efficient solution for converting Excel data into a more structured format (JSON) and seamlessly importing it into a MongoDB database. By automating the conversion and import process, this project eliminates manual effort, reduces the risk of errors, and enables better data organization and accessibility for analysis, reporting, and data-driven decision-making.</p>

<h2 align="left"> Benefits </h2>
<p>

**Efficient Data Conversion**: Convert Excel data to JSON format, which is more flexible and intuitive for data manipulation and integration with other systems.

**Streamlined Data Import**: Automate the process of importing Excel data into MongoDB, saving time and reducing the risk of manual data entry errors.

**Integration with MongoDB**: Leverage MongoDB's scalability and flexibility to efficiently store, retrieve, and query data, enabling seamless integration with other hospital systems and applications.

**Enhanced Data Analysis**: Utilize MongoDB's querying and aggregation capabilities to perform advanced analytics, generate reports, and gain insights from the imported data.

**Flexibility and Scalability**: Accommodate evolving data requirements within a hospital environment by leveraging MongoDB's flexible schema and scalability features.

**Automation and Time Savings**: Automate the data conversion and import process, freeing up IT resources and reducing manual effort.

**Data Integration and Interoperability**: Integrate Excel data into the MongoDB database, promoting interoperability and seamless data flow across different hospital systems.

</p>

##
<p> This README file will guide you through the steps required to set up your environment and use the code effectively. </p>

<h2 align="left"> Prerequisites </h2>
<p>Before getting started, ensure that you have the following prerequisites installed on your machine:

Node.js: Download and Install Node.js
MongoDB: Download and Install MongoDB
</p>

<h2 align="left"> Installations </h2>

**Clone the repository:**
```bash
git clone <repository_url>
```

**Navigate to the project directory:**
```bash
cd <excel-to-mongodb-converter>
```

**Install the dependencies:**
```bash
npm install
```

**1. Configure MongoDB Connection:**
-Ensure that MongoDB is running on your local machine or provide the appropriate connection URL in the code (in url variable).

**2. Set up the Upload Directory:**
-Create a directory named uploads in the project root directory.

**3. Start the Server:**
```bash
npm start
```

**The server will start running on http://localhost:8000.**


<h2 align="left"> Usage </h2>

**1. Upload an Excel File:**
-Make a POST request to http://localhost:8000/api/v1/uploadfile using an API testing tool like Postman.
-Set the uploadfile parameter as a file attachment, selecting an Excel file to upload.
**2. Verify Import:**
-Check the console output for the converted JSON data.
-Connect to your MongoDB database and verify that the data has been imported into the customers collection.


<h2 align="left"> Customization </h2>
-Modify the code to match your Excel file's structure and column mappings.


<h2 align="left"> Contributing </h2>
Contributions are welcome! Feel free to submit bug reports, suggestions, or pull requests to help improve this project. Please adhere to the guidelines in the CONTRIBUTING.md file.


<h2 align="left"> License </h2>
This project is licensed under the MIT License.

##
<p> Now you're all set to use the Excel to MongoDB Converter! Follow the provided instructions to set up your environment, upload Excel files, and import the data into MongoDB for seamless analysis. If you encounter any issues or have any questions, please refer to the documentation or submit an issue in the repository. </P>

## Happy converting and analyzing your data with ease!