---
title: "cv"
---

# curriculum vitae

## Education

### Ph.D. Computer Science, Texas State University (2022-)

- Concentration in Software Systems

### B.S. Computer Science, Texas State University (2018-2021)

- Graduated Summa Cum Laude
- Notable Courses: Parallel Programming, Compiler Construction, Software Engineering, Machine Learning, Artificial Intelligence

***

## Publications

### Brandon Alexander Burtchell and Martin Burtscher. "Characterizing CUDA and OpenMP Synchronization Primitives." Proceedings of the IEEE International Symposium on Workload Characterization. September 2024. [[paper](./pdf/2024-09-characterizing-cuda-and-openmp-synchronization-primitives.pdf)][[github](https://github.com/burtscher/SyncPerformance)]

>Over the last two decades, parallelism has become the primary method for speeding up computer programs. When writing parallel code, it is often necessary to use synchronization primitives (e.g., atomics, barriers, or critical sections) to enforce correctness. However, the performance of synchronization primitives depends on a variety of complex factors that non-experts may be unaware of. Since multiple primitives can typically be used to complete the same task, choosing the best is often non-trivial. In this paper, we study the performance impact of these factors by measuring the throughput of OpenMP and CUDA synchronization primitives along multiple dimensions. We highlight interesting and non-intuitive behavior that software developers should be aware of when writing parallel programs.

### Brandon Alexander Burtchell and Martin Burtscher. "Using Machine Learning to Predict Effective Compression Algorithms for Heterogeneous Datasets." Proceedings of the 2024 Data Compression Conference. March 2024. [[doi](https://doi.org/10.1109/DCC58796.2024.00026)][[paper](./pdf/2024-03-mlcomp.pdf)][[slides](./pdf/2024-03-mlcomp-slides.pdf)]

>Heterogeneous datasets are prevalent in big-data domains. However, compressing such datasets with a single algorithm results in suboptimal compression ratios. This paper investigates how machine-learning techniques can help by predicting an effective compression algorithm for each file in a heterogeneous dataset. In particular, we show how to train a very simple model using nothing but the compression ratios of a few algorithms as features. We named this technique MLcomp. Despite its simplicity, it is very effective as our evaluation on nearly 9,000 files from a heterogeneous dataset and a library of over 100,000 compression algorithms demonstrates. Using MLcomp to pick one lossless algorithm from this library for each file yields an average compression ratio that is 97.8% of the best possible. 

### Brandon Burtchell, Michael Finch, and Xiao Chen. "Self-Driving Vehicle Data Scheduling in Edge-Clouds." Proceedings of the 8th National Workshop for REU Research in Networking and Systems, co-located with the IEEE 19th International Conference on Mobile Ad-Hoc and Smart Systems. October 2022. [[doi](https://doi.org/10.1109/MASS56207.2022.00099)][[paper](./pdf/2022-10-self-driving-vehicle-data-scheduling-in-edge-clouds.pdf)]

>In an edge cloud environment, data processing in self-driving vehicles goes through local processing, communication, and remote processing. How to schedule these data for timely processing is critical to guaranteeing the safety of self-driving vehicles. This scheduling problem is related to the flow shop scheduling problem, which is NP-complete. In this paper, different from those in the literature that focus on minimizing makespan, our objective is to develop algorithms that produce schedules to minimize the average waiting time AWT and by taking the priorities of the data types into account since vehicle data are time-sensitive and different data types have different emergency levels. In regard to this objective, we propose two heuristic algorithms: the Priority and AWT-based NEH (PAN) algorithm, and the Priority-based Aalla’s (PAA) algorithm. Simulation results show that our proposed algorithms outperform the preexisting ones and while PAN is a better algorithm when considering our metrics, PAA is more efficient while still producing similarly viable results.

***

## Employment

### Department of Computer Science - Texas State University (2023-)

#### Doctoral Instructional Assistant

- Assisting instruction and grading for *Compiler Construction*
- Assisted instruction and grading for *Introduction to Computer Vision*
- Assisted instruction, grading, and exam proctoring for *Introduction to Computer Science*

### Kohl's (2023)

#### Software Engineer Intern

- Maintained full tech stack for a supply chain forecasting application
- Proposed an innovative application to a panel of leadership

***

## Awards

### Computer Science Research Excellence Award (2024)

### Computer Science Research Excellence Award (2022)

- Awarded for the research done as part of the NSF REU S&CC

***

## Skills

Professional Level: CUDA, C++, Python, Java, Git, Linux

Amateur Level: Godot/GDScript, C#, Unity Engine, HTML, CSS, JavaScript
