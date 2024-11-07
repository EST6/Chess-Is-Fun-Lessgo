USE {
   dependencies("org.mariadb.jdbc:mariadb-java-client:$version")
}

import java.sql.DriverManager
import java.util.*

val URL = "YOUR_URL"
val USER_NAME = "YOUR_USERNAME"
val PASSWORD = "YOUR_PASSWORD"

val dbConfig = DatabaseConfiguration(URL, USER_NAME, PASSWORD)

val dataschemas = DataFrame.getSchemaForAllSqlTables(dbConfig)

dataschemas.forEach {
    println("---Yet another table schema---")
    println(it)
    println()
}