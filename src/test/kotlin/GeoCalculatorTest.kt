package main.java

import junit.framework.TestCase
import org.junit.Test

class GeoTest {
    @Test
    fun testDistanceBetweenUnqAnObelisco() {
        val unq =Pair(-34.706272, -58.278519)
        val obelisco = Pair(-34.603702, -58.381575)
        val distance = GeoCalculator.distance(unq, obelisco)
        TestCase.assertEquals(14.79, distance, 0.0001)
    }

    @Test
    fun testDistanceBetweenUnqAnEsquel() {
        val unq = Pair(-34.706272, -58.278519)
        val esquel = Pair(-42.914301, -71.319680)
        val distance = GeoCalculator.distance(unq, esquel)
        TestCase.assertEquals(1449.57, distance, 0.02)
    }
}