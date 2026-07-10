---
title: "Algorithm Complexity Explained: Big O, Time Complexity, and Space Complexity"
author: Ahmad
pubDatetime: 2026-07-09
slug: algorithm-complexity-explained-big-o-time-complexity-and-space-complexity
description: "Learn the fundamentals of algorithm complexity, including Big O notation, time complexity, and space complexity with practical examples."
featured: false
draft: true
tags:
  - Fundamentals
  - Algorithm
  - Space Complexity
  - Time Complexity
  - Big O
---

# What Is Algorithm Complexity

Algorithm complexity adalah pengukuran matematis mengenai computational resources
berlandaskan time and memory yang di butuhkan algoritma untuk menyelesaikan computation,
operations etc berdasarkan inputnya biasanya di sebut `O(n)`

# The Two Core Types of Complexity

`Time Complexity`: mengukur seberapa banyak resources yang digunakan (CPU) pada sebuah algoritma berjalan seiring bertambahnya jumlah data input

`Space Complexity`: mengukur seberapa banyak resources yang digunakan (RAM) pada sebuah algoritma berjalan seiring bertambahnya jumlah data input pada sebuah algoritma berjalan seiring bertambahnya jumlah data input

## Understanding Big O Notation

#### 1. O(1) Constant Time

```python
data = [1,2,3,4,5,6,7]

print(data[2])
```

Code di atas sangat simple dan mudah di pahami, tetapi di balik itu banyak hal yang orang yang tidak mengerti cara bekerjanya
pada deklarasi variable array of integer, sebenarnya data tersebut benar benar di simpan pada sebuah memory yang berurutan,
sehingga di katakan `O(1)` karena dengan hanya mengambil dengan cara `data[i]` hampir tidak ada comparison dan operations apapun,
sehingga bisa di katanya ini adalah algorithm tercepat.

#### 2. O(log n) Logarithmic Time

```python
def binary_search(data, target):
    left = 0
    right = len(data) - 1

    while left <= right:
        mid = (left + right) // 2

        if data[mid] == target:
            return mid

        if data[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


numbers = [1, 3, 5, 7, 9, 11, 13, 15]

print(binary_search(numbers, 11))
```

#### 3. O(n) Linear Time

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5

for value in data:
  if value == target:
    print("Found!")
```

#### 4. O(n log n) Linearithmic Time

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    result = []

    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result


numbers = [5, 2, 7, 1, 9, 4]

print(merge_sort(numbers))
```

#### 5. O(n²) Quadratic Time

```python
numbers = [1, 2, 3, 4]

for i in numbers:
    for j in numbers:
        print(i, j)
```

#### 6. O(2ⁿ)

```python
def fibonacci(n):
    if n <= 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(10))
```

#### 7. O(n!) Factorial Time

```python
def permute(nums, current=[]):
    if not nums:
        print(current)
        return

    for i in range(len(nums)):
        permute(
            nums[:i] + nums[i + 1:],
            current + [nums[i]]
        )


permute([1, 2, 3])
```

## Summary Table

| Big O          | Common Example            | Typical Use Case      |
| -------------- | ------------------------- | --------------------- |
| **O(1)**       | Array indexing            | Direct access         |
| **O(log n)**   | Binary Search             | Searching sorted data |
| **O(n)**       | Linear Search             | Scanning a list       |
| **O(n log n)** | Merge Sort, Heap Sort     | Efficient sorting     |
| **O(n²)**      | Bubble Sort, nested loops | Comparing every pair  |
| **O(2ⁿ)**      | Recursive Fibonacci       | Brute-force recursion |
| **O(n!)**      | Permutations              | Backtracking problems |

## Big O Notation Grap

![big-o-notation-grap](../../../assets/images/big-o-notation-grap.jpeg)
[image source](https://www.linkedin.com/pulse/big-o-notation-its-significance-llms-tarry-singh-vizxc/)
