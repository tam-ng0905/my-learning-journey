
import numpy as np
import matplotlib.pyplot as plt
from numpy.linalg import inv, qr
from random import normalvariate

data = np.random.randn(2, 3, 2)

print(data)

print(data * 10)

arr1 = np.array([1, 2, 3], dtype=np.float64)

arr = np.arange(10)

arr

arr[5:8] = 12

print(arr)


arr = np.random.randn(7)
print("this is it")
print(np.where(arr > 0))

remainder, whole_part = np.modf(arr)
print(remainder, whole_part)


points = np.arange(-5, 5, 0.01)
xs, ys = np.meshgrid(points, points)

z = np.sqrt(xs ** 2 + ys ** 2)
print(z)

plt.imshow(z, cmap=plt.cm.gray); plt.colorbar()
plt.title("Image")


xarr = np.array([1.1, 1.2, 1.3])
yarr = np.array([2.1, 2.2, 2.3])

cond = np.array([True, False, True])

#Todo:

result = [(x if c else y)
          for x, y, c in zip(xarr, yarr, cond)]
print(result)


bools = np.array([False, False, True, False])
print(bools.any())
print(bools.all())

arr2 = np.random.randn(6)
print(arr2 ** 2)

arr3 = np.random.randn(5, 3)
print(arr3)

print(arr3.sort(1))

np.save('some_array', arr3)

np.load('some_array.npy')


X = np.random.randn(5,5)
mat = X.T.dot(X)


print(inv(mat))
samples = np.random.normal(size=(4,4))

N = 1000000


import random
position = 0
walk = [position]
steps = 1000
for i in range(steps):
    step = 1 if random.randint(0, 1) else -1
    position += step
    walk.append(position)

plt.plot(walk[:100])