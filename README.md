
# Python

- Open-source, interpreted and dynamic language
- Created in 1991, by a developer named Guido Van Rossum.  
- Most popular Python web frameworks are: Django, Flask, Falcon, Pyramid, and Bottle

Minimalistic Python Docs: https://pythonbasics.org/

---

Download from: https://www.python.org/downloads/

Use `python3 --version` to see if python 3 is installed and print its version (on Windows it could be `python --version`)

To run a python file use `python3 filename.py` - don't forget the `.py` at the end (on Windows it could be `python filename.py`)

### Examples

```py
# For loop 1
for i in range(1, 6):
    print(i)

# For loop 2
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Nested For loops
for i in range(3):
    for j in range(2):
        print(f"({i}, {j})")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
```

### Data types
#### If you want to specify the data type, you can use the following constructor functions:
```py
x = str("Hello World")
x = int(20)
x = float(20.5)
x = complex(1j)
x = list(("apple", "banana", "cherry"))
x = tuple(("apple", "banana", "cherry"))
x = range(6)
x = dict(name="John", age=36)
x = set(("apple", "banana", "cherry"))
x = frozenset(("apple", "banana", "cherry"))
x = bool(5)
x = bytes(5)
x = bytearray(5)
x = memoryview(bytes(5))
```
