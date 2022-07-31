---
title: eBPF Primer
publish_date: 2022-07-10
---

*“Some say software is eating the world, I would say that: BPF is eating software”*

To paraphrase [Brad Gerstner](https://www.acquired.fm/episodes/altimeter-with-brad-gerstner), there are two broad approaches to investing: “working the cocktail circuit” or being an “anthropologist”. At the cocktail parties I’ve attended of late, touting ~new ways to program the Linux kernel isn’t always a surefire way to make friends, so anthropology it is. Like many emerging technologies (a la WebAssembly), it isn’t exclusively eBPF itself that represents a direct opportunity, but also the potential second-order solutions that the technology enables.

The market adjacent to eBPF is easy to get excited about. Linux is the world’s [most used](https://frameboxxindore.com/other/what-percentage-of-servers-are-linux.html#:~:text=90%25%20of%20all%20cloud%20infrastructure%20operates%20on%20Linux) operating system — the trillion-dollar cloud runs on Linux. Yet despite its popularity, [Brendan Gregg](https://www.brendangregg.com/) has famously likened the Linux kernel to HTML — a non-programmable file.

** *Adds calling people “HTML” to insult list* **

The programmability of the web is what led to the proliferation of web-based applications vs. pages. Similarly, eBPF facilitates the building of kernel-based applications. At this point at the cocktail party, I’m duly asked “why would I want to build kernel-based applications?”, to which I retort back “why would I want to build web-based applications?”. The web and the kernel have/are both software interfaces with assigned roles, which means that they receive specific inputs (data) and permissions (functions) that adjacent applications can use to conduct certain tasks.

Anyway, enough preambling. There are plenty of deeply technical posts elaborating on eBPF and pontificating on its future — this post will do the same, but (hopefully) in a more approachable and actionable way.

If you’re building eBPF developer tooling or solving problems with eBPF generally I’d love to talk to you / grab coffee if you’re in London >> alex at tapestry dot vc

---

### eBPF Primer

[eBPF](https://ebpf.io/what-is-ebpf/) (Extended Berkeley Packet Filters) is a method of programming the Linux kernel. For the uninitiated (the lucky ones) the kernel is the piece of software within the Linux operating system that enables applications in *userspace* (e.g., Slack) to interact with a computer's underlying hardware (e.g., memory). The kernel’s intermediary role means that it is incredibly *privileged* — it “sees” all information communicated and decides what to relay/execute.

So, “programming” the kernel means providing this privileged software with additional functionality and context, and hence, utility via code written by developers. Much like adding JavaScript to a webpage to enable computation or statefulness.

The kernel has historically been difficult to program due to its central role and high requirement for stability and security. The rate of innovation at the operating system level has thus traditionally been lower compared to functionality implemented outside of the operating system. Prior to eBPF, the kernel was ~safely programmed via: 1) changing the kernel’s source code (which can take years) or 2) loading “kernel modules” (which aren’t backward compatible).

> Key Point: Alternative methods of programming the kernel are slow to implement or error-prone.

*So, how does eBPF enable the kernel to be programmed in a way that is expedient, performant, and less prone to failure?*

At a high-level, eBPF programs go through a series of steps to ensure that they’re insusceptible to the issues loadable kernel modules create. These steps are encapsulated under the process known as the “eBPF runtime”.

This “eBPF runtime” consists of 3 core processes:

1. Program Development.
2. Program Verification.
3. Program Attachment.

**1) Program Development**

Firstly, developers write the code that will program the kernel. Developers will often write eBPF programs via higher-level languages like Python/C because it’s easier to write programs in these languages vs. writing eBPF bytecode.

** *We’re going to jump into the deep end a little now but stay with me* **

Within these programs, developers will specify a “program type” and “hook point”.

