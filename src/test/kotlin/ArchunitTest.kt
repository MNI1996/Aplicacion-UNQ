import com.tngtech.archunit.junit.AnalyzeClasses
import com.tngtech.archunit.junit.ArchTest
import com.tngtech.archunit.junit.ArchUnitRunner
import com.tngtech.archunit.lang.ArchRule

import javax.persistence.Entity;

import com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;
import org.junit.runner.RunWith

@RunWith(ArchUnitRunner::class)
@AnalyzeClasses(packages = ["Modelo"])
class PackageLocationTest {

    @ArchTest
    val DAOs_must_reside_in_a_dao_package: ArchRule = classes().that().haveNameMatching(".*DAO").should().resideInAPackage("..Daos..")
            .`as`("DAOs should reside in a package '..persistence..'")
    @ArchTest
    val entities_must_reside_in_a_domain_package: ArchRule = classes().that().areAnnotatedWith(Entity::class.java).should().resideInAPackage("..Modelo..")
            .`as`("Entities should reside in a package '..modelo..'")
}