---
title: "cv"
---

# curriculum vitae

## Education

### PhD Computer Science, Texas State University (Aug 2023 - Present)

- Expected Graduation: Dec 2026
<!-- - Concentration in Software Systems -->

### BS Computer Science, Texas State University (Aug 2018 - Dec 2021)

- Graduated Summa Cum Laude
<!-- - Notable Courses: Parallel Programming, Compiler Construction, Software Engineering, Machine Learning -->

<!-- *** -->

## Employment

### Research Assistant, Doctoral Instructional Assistant

#### Texas State University (Jan 2023 - Present)

- Researching in the Efficient Computing Lab, advised by Dr. Martin Burtscher
- Assisted instruction for *Compiler Construction*, *Introduction to Computer Vision*, and *Introduction to Computer Science*

### Intern, Software Engineer

#### Simuli (Jun 2024 - Sep 2024)


- Translated *Nebuli* compressor from C to CUDA to parallelize on Nvidia GPUs
- Skills used: CUDA, C/C++, Python


### Intern, Software Engineer

#### Kohl's (Jun 2023 - Aug 2023)

- Maintained full stack for ML-based supply-chain forecasting web application
- Skills used: Java, JavaScript, React, Spring Boot, SQL


## Publications

### Brandon Alexander Burtchell and Martin Burtscher. *Building n-Dimensional Trees for Resolution-Based Progressive Compression.* SC Workshops '25. November 2025. [[doi](https://doi.org/10.1145/3731599.3767373)][[paper](./pdf/DRBSD25-2.pdf)][[slides](./pdf/DRBSD25-2-slides.pptx)]

{{<details summary="Abstract">}}
Floating-point data is typically compressed at strict error bounds to reduce storage cost while facilitating scientific analyses. Unfortunately, this tends to yield large compressed files. In some cases, however, a user might not need the data at a high fidelity. Progressive compression addresses this issue by refactoring the data into a hierarchical series of increasing fidelity, allowing users to download the data at an initial fidelity and subsequently retrieve higher fidelities. This paper studies a resolution-based progressive compression approach that achieves competitive compression ratios against traditional compression methods. Furthermore, it studies how the progression of resolution affects the quality of the data.
{{</details>}}

### Brandon Alexander Burtchell and Martin Burtscher. *Characterizing the Performance of Parallel Data-Compression Algorithms across Compilers and GPUs.* SC Workshops '25. November 2025. [[doi](https://doi.org/10.1145/3731599.3767369)][[paper](./pdf/DRBSD25-1.pdf)][[slides](./pdf/DRBSD25-1-slides.pptx)]

{{<details summary="Abstract">}}
Different compilers can generate code with notably different performance characteristics—even on the same system. Today, GPU developers have three popular options for compiling CUDA or HIP code for GPUs. First, CUDA code can be compiled by either NVCC or Clang for NVIDIA GPUs. Alternatively, AMD’s recently introduced HIP platform makes porting from CUDA to HIP relatively simple, enabling compilation for AMD and NVIDIA GPUs. This study compares the performance of 107,632 data-compression algorithms when compiling them with different compilers and running them on different GPUs from NVIDIA and AMD. We find that the relative performance of some of these codes changes significantly depending on the compiler and hardware used. For example, Clang tends to produce relatively slow compressors but relatively fast decompressors compared to NVCC and HIPCC.
{{</details>}}

### Brandon Alexander Burtchell and Martin Burtscher. *Characterizing CUDA and OpenMP Synchronization Primitives.* Proceedings of the IEEE International Symposium on Workload Characterization. September 2024. [[doi](https://doi.org/10.1109/IISWC63097.2024.00034)][[paper](./pdf/IISWC24.pdf)][[github](https://github.com/burtscher/SyncPerformance)][[slides](./pdf/IISWC24-slides.pptx)]

{{<details summary="Abstract">}}
Over the last two decades, parallelism has become the primary method for speeding up computer programs. When writing parallel code, it is often necessary to use synchronization primitives (e.g., atomics, barriers, or critical sections) to enforce correctness. However, the performance of synchronization primitives depends on a variety of complex factors that non-experts may be unaware of. Since multiple primitives can typically be used to complete the same task, choosing the best is often non-trivial. In this paper, we study the performance impact of these factors by measuring the throughput of OpenMP and CUDA synchronization primitives along multiple dimensions. We highlight interesting and non-intuitive behavior that software developers should be aware of when writing parallel programs.
{{</details>}}

### Brandon Alexander Burtchell and Martin Burtscher. *Using Machine Learning to Predict Effective Compression Algorithms for Heterogeneous Datasets.* Proceedings of the 2024 Data Compression Conference. March 2024. [[doi](https://doi.org/10.1109/DCC58796.2024.00026)][[paper](./pdf/DCC24.pdf)][[slides](./pdf/DCC24-slides.pdf)]

{{<details summary="Abstract">}}
Heterogeneous datasets are prevalent in big-data domains. However, compressing such datasets with a single algorithm results in suboptimal compression ratios. This paper investigates how machine-learning techniques can help by predicting an effective compression algorithm for each file in a heterogeneous dataset. In particular, we show how to train a very simple model using nothing but the compression ratios of a few algorithms as features. We named this technique MLcomp. Despite its simplicity, it is very effective as our evaluation on nearly 9,000 files from a heterogeneous dataset and a library of over 100,000 compression algorithms demonstrates. Using MLcomp to pick one lossless algorithm from this library for each file yields an average compression ratio that is 97.8% of the best possible. 
{{</details>}}

### Brandon Burtchell, Michael Finch, and Xiao Chen. *Self-Driving Vehicle Data Scheduling in Edge-Clouds.* Proceedings of the 8th National Workshop for REU Research in Networking and Systems, co-located with the IEEE 19th International Conference on Mobile Ad-Hoc and Smart Systems. October 2022. [[doi](https://doi.org/10.1109/MASS56207.2022.00099)][[paper](./pdf/MASS22.pdf)]

{{<details summary="Abstract">}}
In an edge cloud environment, data processing in self-driving vehicles goes through local processing, communication, and remote processing. How to schedule these data for timely processing is critical to guaranteeing the safety of self-driving vehicles. This scheduling problem is related to the flow shop scheduling problem, which is NP-complete. In this paper, different from those in the literature that focus on minimizing makespan, our objective is to develop algorithms that produce schedules to minimize the average waiting time AWT and by taking the priorities of the data types into account since vehicle data are time-sensitive and different data types have different emergency levels. In regard to this objective, we propose two heuristic algorithms: the Priority and AWT-based NEH (PAN) algorithm, and the Priority-based Aalla’s (PAA) algorithm. Simulation results show that our proposed algorithms outperform the preexisting ones and while PAN is a better algorithm when considering our metrics, PAA is more efficient while still producing similarly viable results.
{{</details>}}

<!-- ## Awards and Recognition -->
<!---->
<!-- - IISWC 2024 Student Travel Grant (2024) -->
<!-- - TXST Computer Science Research Excellence Award (2024) -->
<!-- - RMBL REU Student Travel Grant (2022) -->
<!-- - TXST Computer Science Research Excellence Award (2022) -->

## Skills

Professional: C, C++, CUDA, OpenMP, Python, Java, HIP/ROCm

Novice Level: JavaScript, React, Godot (GDScript), Docker, MATLAB, SQL
