# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.17

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Disable VCS-based implicit rules.
% : %,v


# Disable VCS-based implicit rules.
% : RCS/%


# Disable VCS-based implicit rules.
% : RCS/%,v


# Disable VCS-based implicit rules.
% : SCCS/s.%


# Disable VCS-based implicit rules.
% : s.%


.SUFFIXES: .hpux_make_needs_suffix_list


# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CLion.app/Contents/bin/cmake/mac/bin/cmake

# The command to remove a file.
RM = /Applications/CLion.app/Contents/bin/cmake/mac/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/DU_OS.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/DU_OS.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/DU_OS.dir/flags.make

CMakeFiles/DU_OS.dir/main.cpp.o: CMakeFiles/DU_OS.dir/flags.make
CMakeFiles/DU_OS.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/DU_OS.dir/main.cpp.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/DU_OS.dir/main.cpp.o -c /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/main.cpp

CMakeFiles/DU_OS.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/DU_OS.dir/main.cpp.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/main.cpp > CMakeFiles/DU_OS.dir/main.cpp.i

CMakeFiles/DU_OS.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/DU_OS.dir/main.cpp.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/main.cpp -o CMakeFiles/DU_OS.dir/main.cpp.s

# Object files for target DU_OS
DU_OS_OBJECTS = \
"CMakeFiles/DU_OS.dir/main.cpp.o"

# External object files for target DU_OS
DU_OS_EXTERNAL_OBJECTS =

DU_OS: CMakeFiles/DU_OS.dir/main.cpp.o
DU_OS: CMakeFiles/DU_OS.dir/build.make
DU_OS: CMakeFiles/DU_OS.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable DU_OS"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/DU_OS.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/DU_OS.dir/build: DU_OS

.PHONY : CMakeFiles/DU_OS.dir/build

CMakeFiles/DU_OS.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/DU_OS.dir/cmake_clean.cmake
.PHONY : CMakeFiles/DU_OS.dir/clean

CMakeFiles/DU_OS.dir/depend:
	cd /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug /Users/tamnguyen/Documents/Dev/my-learning-journey/DU-OS/cmake-build-debug/CMakeFiles/DU_OS.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/DU_OS.dir/depend

