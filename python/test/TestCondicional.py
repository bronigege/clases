import unittest
from condicional.par_impar import par_impar
from condicional.es_divisor import es_divisor
from condicional.numero_mayor import numero_mayor


class TestCondicional(unittest.TestCase):
    def test_par_impar(self):
        self.assertTrue(par_impar(2))
        self.assertTrue(par_impar(4))
        self.assertTrue(par_impar(94))
        self.assertTrue(par_impar(2824))
        self.assertFalse(par_impar(3))
        self.assertFalse(par_impar(13))
        self.assertFalse(par_impar(27))
        self.assertFalse(par_impar(9183))
        self.assertFalse(par_impar(281))
        self.assertFalse(par_impar(25))

    def test_es_divisor(self):
        self.assertTrue(es_divisor(2, 4))
        self.assertTrue(es_divisor(6, 18))
        self.assertTrue(es_divisor(24, 48))
        self.assertFalse(es_divisor(3, 2))
        self.assertFalse(es_divisor(4, 2))
        self.assertFalse(es_divisor(133, 231))
        self.assertFalse(es_divisor(256, 492132))

    def test_numero_mayor(self):
        self.assertEqual(2, numero_mayor(2, 2))
        self.assertEqual(25, numero_mayor(25, 2))
        self.assertEqual(541, numero_mayor(1, 541))