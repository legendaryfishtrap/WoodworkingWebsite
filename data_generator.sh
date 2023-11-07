#!/bin/bash

# Directory containing project folders (relative to the script location)
projects_directory="projects"

# Output directory for the JavaScript files
output_directory="src/Data"

# Directory for the image repository
image_repo_directory="ImageRepo"

# Determine the full path to the directory containing the script
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Determine the full path to the 'projects' directory
projects_full_path="$script_dir/$projects_directory"

# Determine the full path to the output directory
output_full_path="$script_dir/$output_directory"

# Determine the full path to the image repository directory
image_repo_full_path="$script_dir/$image_repo_directory"

# JavaScript file to write for 'Projects' in the output directory
projects_output_file="$output_full_path/Projects.js"

# JavaScript file to write for 'Images' in the output directory
images_output_file="$output_full_path/Images.js"

# Initialize the JavaScript file for 'Projects' in the output directory
echo "export const Projects = {" > "$projects_output_file"

# Initialize the JavaScript file for 'Images' in the output directory as an array
echo "export const Images = [" > "$images_output_file"

# Iterate through project folders
first_image=true
for project_dir in "$projects_full_path"/*; do
  if [ -d "$project_dir" ]; then
    project_name=$(basename "$project_dir")
    description_file="$project_dir/description.txt"
    images_directory="$project_dir/images"
    thumbnails_directory="$images_directory/thumbnails"  # New thumbnails directory
    title_file="$project_dir/title.txt"  # New title file

    # Read the project description
    project_description=$(<"$description_file")

    # List regular image files
    images=()
    for image_file in "$images_directory"/*; do
      if [ -f "$image_file" ]; then
        image_name=$(basename "$image_file")
        images+=("\"$image_name\"")  # Enclose image names in double quotes
        # Copy the image to the ImageRepo directory
        mkdir -p "$image_repo_full_path/$project_name"
        cp "$image_file" "$image_repo_full_path/$project_name/$image_name"
      fi
    done

    # List thumbnail image files (similar to regular images)
    thumbnails=()
    for thumbnail_file in "$thumbnails_directory"/*; do
      if [ -f "$thumbnail_file" ]; then
        thumbnail_name=$(basename "$thumbnail_file")
        thumbnails+=("\"thumbnails/$thumbnail_name\"")  # Enclose thumbnail names in double quotes
        # Copy the thumbnail to the ImageRepo directory
        mkdir -p "$image_repo_full_path/$project_name/thumbnails"
        cp "$thumbnail_file" "$image_repo_full_path/$project_name/thumbnails/$thumbnail_name"
      fi
    done

    # Read the project title
    project_title=$(<"$title_file")

    # Write project data to the 'Projects' JavaScript file
    echo "  $project_name: {" >> "$projects_output_file"
    echo "    projectName: \"$project_name\"," >> "$projects_output_file"
    echo "    projectDescription: \"$project_description\"," >> "$projects_output_file"
    echo "    projectImages: [$(IFS=,; echo "${images[*]}")]," >> "$projects_output_file"
    echo "    projectThumbnails: [$(IFS=,; echo "${thumbnails[*]}")]," >> "$projects_output_file"  # Include thumbnails
    echo "  }," >> "$projects_output_file"

    # Write project data to the 'Images' JavaScript file as an object in the array
    if [ "$first_image" = true ]; then
      first_image=false
    else
      echo "," >> "$images_output_file"  # Add a comma between objects
    fi
    echo "  {" >> "$images_output_file"
    echo "    image: $images," >> "$images_output_file"
    echo "    title: \"$project_title\"," >> "$images_output_file"
    echo "    project: \"$project_name\"," >> "$images_output_file"
    echo "  }" >> "$images_output_file"
  fi
done

# Close the JavaScript object for 'Projects'
echo "};" >> "$projects_output_file"

# Close the JavaScript array for 'Images'
echo "]" >> "$images_output_file"

echo "JavaScript file '$projects_output_file' for 'Projects' has been generated."
echo "JavaScript file '$images_output_file' for 'Images' has been generated."

echo "JavaScript files have been generated and formatted using Prettier."
