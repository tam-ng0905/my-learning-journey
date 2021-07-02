from django.test import TestCase

from .calc import add, subtract

class CalcTests(TestCase):
    #the name of the function has to start with test
    def test_add_numbers(self):
        """Test that two numbers are added together"""
        self.assertEqual(add(3, 8), 11)
    def test_substract_number(self):
        """Test that values are subtracted and returned"""
        self.assertEqual(subtract(5,2), 3)
