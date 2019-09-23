https://untitledtblog.tistory.com/132

1. 알고리즘 정의

데이터를 입력받아 이를 소수의 그룹으로 묶는 알고리즘
각 데이터에 label을 할당함으로써 군집화를 수행한다

N개의 데이터 X={x1,x,2,...,xN}에 대하여 
데이터가 속한 cluster의 중심과 데이터의 거리의 차이가 최소가 되도록 데이터들을 K 개의 cluster S={s1,s2,...,sK}에 할당
많은 연구에서 K를 자동으로 설정하기 위한 시도가 이루어졌지만,

기본적으로 K는 데이터를 분석하고자 하는 사람이 직접 설정해 주어야 한다.


2. 표준 알고리즘
1957년 Stuart Lloyd가 제안한 Lloyd 알고리즘

**initialization** : 초기 ck을 설정한다. 랜덤 초기화, Forgy 알고리즘, MacQueen 알고리즘 등 ck를 초기화하기 위한 다양한 알고리즘들이 제안되었으며, 가장 기본적인 알고리즘은 랜덤 초기화

**Assignment** : [알고리즘 1]의 4~6번째 줄과 같이 모든 데이터에 대하여 가장 가까운 cluster를 선택한다. 데이터와 cluster간의 거리는 데이터 벡터 xn과 cluster의 중심 ck간의 거리로 계산된다.

**Update** : 모든 데이터에 대하여 가장 가까운 cluster가 선택되면, 이를 바탕으로 ck를 수정한다. 이 단계에서 ck는 [알고리즘 1]의 8~10번째 줄과 같이 k번째 cluster sk에 할당된 모든 데이터 벡터의 평균으로 갱신된다.

3. 시간 복잡도
K-means clustering의 최적 해를 찾는 것은 NP-hard 문제에 속한다. 따라서, k-means clustering에서는 Lloyd 알고리즘과 같은 휴리스틱 (heuristic) 기법을 주로 이용