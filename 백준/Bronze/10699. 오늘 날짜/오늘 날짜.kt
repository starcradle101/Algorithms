import java.time.LocalDate
import java.time.ZoneId
import java.time.format.DateTimeFormatter

fun main() {
    val seoulDate = LocalDate.now(ZoneId.of("Asia/Seoul"))

    val formatter = DateTimeFormatter.ofPattern("YYYY-MM-dd")
    val formattedDate = seoulDate.format(formatter)

    println(formattedDate)
}