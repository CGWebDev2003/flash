#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const terminal = require('terminal-kit').terminal;
const { exec } = require('child_process');
const readline = require('readline');
const fs = require('fs');

// Define Chalk Colors
const yellow = chalk.yellow;
const red = chalk.red.bold;
const cyan = chalk.cyan;
const devider = chalk.dim;
const highlightBlue = chalk.bgBlueBright.black.bold;
const underlinedText = chalk.underline;
const italic = chalk.italic;
const bold = chalk.bold;
const headline = chalk.cyan.bold;


// Define possiple project languages 
var projectLanguages = [
    'HTML',
    'Vanilla JavaScript',
    'React' 
] ;

const projectTitle = "my-project";

const program = new Command();

program
  .name('flash')
  .description('Flash ist ein CLI Tool für Projekte')
  .version('1.0.0')
  .action(() => {
    console.log(' ');
    console.log(devider(' ========================================================== '));
    console.log(cyan('Welcome to:'));
    console.log(devider(' ========================================================== '));
    console.log(' ');
    console.log(yellow(' \\----\\        '), red('    ______ _                 _____ _    _  '));
    console.log(yellow('  \\    \\   	  '), red('|  ____| |        /\\     / ____| |  | | '));
    console.log(yellow('   \\    ------  '), red('  | |__  | |       /  \\   | (___ | |__| | '));
    console.log(yellow('    ------\\   \\'), red('   |  __| | |      / /\\ \\   \\___\\ |  __  | '));
    console.log(yellow('           \\  \\'), red('   | |    | |____ / ____ \\  ____) | |  | | '));
    console.log(yellow('            \\ \\'), red('   |_|    |______/_/    \\_\\ _____/|_|  |_| '));
    console.log(yellow('             \\\\'), red('                                            '));
    console.log('  ');
    console.log(devider(' ========================================================== '));
    console.log('  ');
    console.log(" ", highlightBlue(' AUTHOR:  '), devider('                     Colin Grahm \x1b[0m'));
    console.log('  ');
    console.log(" ", highlightBlue(' VERSION: '), devider('                     v1.0.0 \x1b[0m'));
    console.log('  ');
    console.log(" ", highlightBlue(' LICENSE: '), devider('                     MIT LICENSE \x1b[0m'));
    console.log('  ');
    console.log(" ", highlightBlue(' GITHUB:  '), devider('                     github.com/wbs-flash-cli \x1b[0m'));
    console.log('  ');
    console.log(" ", highlightBlue(' WEBSITE: '), devider('                     flash.colingrahm.com \x1b[0m'));
    console.log('  ');
    console.log(devider(' ========================================================== '));
    console.log('  ');
    console.log(" ", underlinedText('Dont know how to Start? '));
    console.log('  ');
    console.log(italic('  help'), '                             Get Help and find more ');
    console.log('                                    Commands');
    console.log(devider(' ========================================================== '));
  });

program
  .command('help')
  .description('Get Help and find more Commands')
  .action(() => {
    console.log(devider(' ========================================================== '));
    console.log(cyan('     _   _ _____ _     ____       '));
    console.log(cyan('    | |_| | ____| |   |  _ \\     '));
    console.log(cyan('    |  _  |  _| | |   | |_) |     '));
    console.log(cyan('    | | | | |___| |___|  __/      '));
    console.log(cyan('    |_| |_|_____|_____|_|         '));
    console.log('  ');
    console.log(devider(' ========================================================== '));
    console.log('  ');
    console.log(headline('    Commands'));

    console.log('  ');
    console.log(bold('    create'));
    console.log('  ');
    console.log(italic('    flash init-project'), devider('                   create new project'));
    console.log(italic('    flash create-file'), devider('                    create new file'));
    console.log(italic('    flash create-folder'), devider('                  create new folder'));
    console.log(devider('____________________________________________________________'));
  });

  // Command to init project
  program
    .command('init-project')
    .description('Create a new project')
    .action(() => {
      console.log('  ');
      console.log(devider(' ========================================================== '));
      console.log('  ');

      // Ask for the project name
      terminal.magenta("Enter project name: ");
      terminal.inputField((error, projectName) => {
        if (error) {
          console.error('Error:', error);
          projectTitle = projectName;
          process.exit(1);
        }

        // Confirm the project name
        terminal.green("\nYour project is called '%s'\n", projectName);

        console.log('  ');
        console.log(devider(' ========================================================== '));
        console.log('  ');

        // Ask for the language
        terminal.magenta("Which type is your project?: ");
        terminal.singleColumnMenu(projectLanguages, (error, response) => {
          if (error) {
            console.error('Error:', error);
            process.exit(1);
          }

          // Show the selected language
          terminal('\n').eraseLineAfter.green(
            "#%s selected: %s\n",
            response.selectedIndex,
            response.selectedText

          );

          console.log('  ');
          console.log(devider(' ========================================================== '));
          console.log('  ');

          switch(response.selectedText) {
            case 'HTML':
              console.log('HTML project selected.');

              exec('dir', (error, stdout, stderr) => {
                if (error) {
                  console.error(`Error: ${error.message}`);
                  return;
                }
                if (stderr) {
                  console.error(`Stderr: ${stderr}`);
                  return;
                }
              });

              break;
            case 'Vanilla JavaScript':
              console.log('Vanilla JavaScript project selected.');

              exec('dir', (error, stdout, stderr) => {
                if (error) {
                  console.error(`Error: ${error.message}`);
                  return;
                }
                if (stderr) {
                  console.error(`Stderr: ${stderr}`);
                  return;
                }
              });

              break;
            case 'React':
              console.log('React project selected.');

              exec('npx create-react-project ' + projectTitle, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Error: ${error.message}`);
                  return;
                }
                if (stderr) {
                  console.error(`Stderr: ${stderr}`);
                  return;
                }
              });

              break;
            default:
              console.log(terminal.red('Unknown project type selected.'));
          }
  
          console.log('  ');
          console.log(devider(' ========================================================== '));
          console.log('  ');

          terminal.green('Project created :)');
              process.exit(1);
          });
      });
    });

  // Command to create a file
  program
    .command('create-file')
    .description('Create a new file')
    .action(() => {
      // Ask for file name and type
      terminal.magenta("Please enter path, name and type of the file:(e.g., test/test.txt) ");
      terminal.inputField({ echo: true }, (error, fileName) => {
        if (error) {
          console.error('Error:', error);
          process.exit(1);
        }

        // Confirm the file name
        terminal.green("\nYour file is called '%s'\n", fileName);

        // Create the file
        fs.writeFile(fileName, '', (err) => { 
          if (err) {
            terminal.red("Error creating file: %s\n", err.message);
            process.exit(1);
          }

          // Confirm success
          terminal.green("File created successfully :)\n");
          console.log('  ');
          process.exit(0);
        });
      });
    });

  // Command to create a folder
  program
    .command('create-folder')
    .description('Create a new folder')
    .action(() => {
      // Ask for folder name
      terminal.magenta("Please enter the folder name: ");
      terminal.inputField({ echo: true }, (error, folderName) => {
        if (error) {
          console.error('Error:', error);
          process.exit(1);
        }

        // Confirm the folder name
        terminal.green("\nYour folder is called '%s'\n", folderName);

        // Create the folder with the given name
        fs.mkdir(folderName, { recursive: true }, (err) => {
          if (err) {
            terminal.red("Error creating folder: %s\n", err.message);
            process.exit(1);
          }

          // Confirm success
          terminal.green("Folder created successfully :)\n");
          console.log('  ');
          process.exit(0);
        });
      });
    });

  program.parse(process.argv);