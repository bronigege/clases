import unittest
from secuencial.conversor_euros import conversor_euros
from secuencial.operaciones import suma, resta, multiplicar, dividir
from secuencial.notas import notas
from secuencial.conversor_celsius import conversor_celsius
from secuencial.conversor_pulgadas import conversor_pulgadas
from secuencial.bar_andres import bar_andres
from secuencial.tres_siguientes import tres_siguientes
from secuencial.edad_media import edad_media


class TestSecuencial(unittest.TestCase):
    def test_conversor_euros(self):
        self.assertEqual(166.386, conversor_euros(1), "1 euro son 166.386")
        self.assertEqual(332.772, conversor_euros(2), "2 euro son 332.772")
        self.assertEqual(499.158, conversor_euros(3), "3 euro son 499.158")
        self.assertEqual(1663.86, conversor_euros(10), "10 euro son 1663.86")
        self.assertEqual(8319.3, conversor_euros(50), "50 euro son 8319.3")

    def test_operaciones(self):
        self.assertEqual(5, suma(2, 3))
        self.assertEqual(0, resta(2, 2))
        self.assertEqual(4, multiplicar(2, 2))
        self.assertEqual(2, dividir(4, 2))

    def test_notas(self):
        resultado = {
            'aprobados': 25.0,
            'notables': 10.0,
            'sobresalientes': 15.0,
            'superan_asignatura': 50.0,
            'suspensos': 50.0
        }

        self.assertEqual(resultado, notas(10, 5, 2, 3))

        resultado = {
            'aprobados': 50.0,
            'notables': 25.0,
            'sobresalientes': 12.5,
            'superan_asignatura': 87.5,
            'suspensos': 12.5
        }

        self.assertEqual(resultado, notas(2, 8, 4, 2))

    def test_conversor_celsius(self):
        self.assertEqual(35.6, conversor_celsius(2))
        self.assertEqual(37.4, conversor_celsius(3))
        self.assertEqual(59, conversor_celsius(15))
        self.assertEqual(64.4, conversor_celsius(18))
        self.assertEqual(75.2, conversor_celsius(24))
        self.assertEqual(84.2, conversor_celsius(29))
        self.assertEqual(91.4, conversor_celsius(33))

    def test_conversor_pulgadas(self):
        self.assertEqual(25.4, conversor_pulgadas(1))
        self.assertEqual(76.2, conversor_pulgadas(3))
        self.assertEqual(381, conversor_pulgadas(15))
        self.assertEqual(457.2, conversor_pulgadas(18))
        self.assertEqual(609.6, conversor_pulgadas(24))
        self.assertEqual(736.6, conversor_pulgadas(29))
        self.assertEqual(838.2, conversor_pulgadas(33))

    def test_bar_andres(self):
        self.assertEqual(31, bar_andres(2, 4, 5, 6, 2))
        self.assertEqual(71, bar_andres(5, 4, 10, 6, 24))
        self.assertEqual(109.5, bar_andres(14, 2, 30, 6, 24))

    def test_tres_siguientes(self):
        self.assertEqual((101, 102, 103), tres_siguientes(100))
        self.assertEqual((250, 251, 252), tres_siguientes(249))
        self.assertEqual((25, 26, 27), tres_siguientes(24))

    def test_edad_media(self):
        self.assertEqual(20, edad_media(20, 20, 20, 20))
        self.assertEqual(21.75, edad_media(35, 12, 23, 17))
        self.assertEqual(53.5, edad_media(90, 12, 45, 67))
