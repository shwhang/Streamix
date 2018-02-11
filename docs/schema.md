# Database Schema

### Users
Column Name| Data Type | Details
-----------------------------
id|integer|not null, primary key
email|string|not null, indexed, unique
password_digest|string|not null
session_token|string|not null, indexed, unique
