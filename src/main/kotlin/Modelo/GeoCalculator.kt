package main.java
import java.lang.Math.*

object GeoCalculator {
    private const val EARTH_RADIUS: Double = 6371.0

    fun distance(geo1: Pair<Double,Double>, geo2: Pair<Double,Double>): Double {
        val dLat = deg2rad(geo2.first - geo1.first)
        val dLon = deg2rad(geo2.second - geo1.second)
        val temp1: Double = pow(sin(dLat/2), 2.0)
        val temp2: Double = cos(deg2rad(geo1.first)) * cos(deg2rad(geo2.first)) * pow(sin(dLon/2), 2.0)
        val a = temp1 + temp2
        val aTan: Double = 2 * atan2(sqrt(a), sqrt(1 - a))
        val res = aTan * EARTH_RADIUS
        return floor(res * 100) / 100
    }

    private fun deg2rad(dec: Double): Double = dec * (PI / 180)
}