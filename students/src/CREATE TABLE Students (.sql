CREATE TABLE Students (
    Id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Name VARCHAR2(100) NOT NULL,
    Email VARCHAR2(100) UNIQUE NOT NULL,
    Age NUMBER NOT NULL
);
