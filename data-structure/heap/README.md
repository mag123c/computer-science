### Heap

- **트리 기반의 자료구조**로, 항상 **루트 노드에서 데이터를 꺼내는 방식**으로 동작한다.
- 일반적으로 "힙"이라 하면, **완전 이진 트리 기반의 Binary Heap**을 의미한다.
- 하지만 힙의 종류에 따라 **자식이 3개 이상인 D-ary Heap**,  
  **비정형 트리를 사용하는 Fibonacci Heap** 등도 존재하며,  
  이들은 완전 이진 트리 구조를 반드시 따르지는 않는다.
- 노드 간의 **대소 관계는 부모-자식 간에만 성립**하며, **형제 노드 간에는 순서가 정의되지 않는다**.
- 삽입과 삭제 연산은 `O(log N)`의 시간 복잡도를 가지며,  
  루트에서 최댓값 또는 최솟값을 **상수 시간 `O(1)`**에 조회할 수 있다.
- **Binary Heap**은 자식/부모 노드의 인덱스가 고정되어 있어,  
  `left`, `right`, `parent` 필드 없이도 **배열만으로 구현이 가능**하다.


```
[완전 이진 트리 (Complete Binary Tree)]

    - 모든 레벨이 왼쪽부터 차례로 채워진 트리 구조이다.
    - 힙은 이 구조를 배열로 표현하면 매우 효율적이다.
    - 가장 높은(또는 낮은) 우선순위를 가진 노드가 항상 루트에 위치한다.
```

```
MinHeap, MaxHeap을 따로 구현해도 되고, 둘 중 하나만 구현한 뒤 음수화하여 사용해도 된다.
```
