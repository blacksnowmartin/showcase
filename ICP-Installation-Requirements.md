# Installation Requirements to Build DApps on the Internet Computer

## Prerequisites
To get started, ensure you have the following prerequisites:

- A stable **Internet connection**.
- A **Command Line Interface (CLI)**.
- **Visual Studio Code (VS Code)**.

### Required Software
Install the following software on your machine:

- **Node.js 18**
- **dfx** (Internet Computer SDK)
- **Rust**

Below are links and commands for installation, based on your operating system.

---

## Installation Instructions by OS

### Linux

#### Node.js Installation
1. **Using NodeSource**  
   - Visit the [NodeSource repository](https://github.com/nodesource/distributions) for Node.js.
   - Install Node.js v18 with the following commands:

     ```bash
     sudo yum install https://rpm.nodesource.com/pub_18.x/nodistro/repo/nodesource-release-nodistro-1.noarch.rpm -y
     sudo yum install nodejs -y --setopt=nodesource-nodejs.module_hotfixes=1
     ```

2. **Alternative Method**  
   - Check the official Node.js [package manager guide](https://nodejs.org/en/download/package-manager) for other installation options.

#### dfx Installation
To install dfx, run:

```bash
DFX_VERSION=0.17.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

After successful installation, add dfx to your PATH:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

#### Rust Installation
To install Rust, visit the [Rust installation page](https://www.rust-lang.org/tools/install) or use the following command:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup target wasm32-unknown-unknown
```

---

### Windows

**We recommend using WSL2 for compatibility.**  

For any setup issues, refer to the [setup guide](https://docs.google.com/document/d/1Z3AxszTxhnqZHF6_C2ui3MyfIsMeLhjYojdEfmX1_Xo/edit).

#### WSL2 Installation
Follow these guides:
- [Microsoft WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install)
- [Pureinfotech WSL2 installation](https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/)

#### Node.js Installation
Visit [Node.js Downloads](https://nodejs.org/en/download).

#### dfx Installation
The dfx SDK is not natively supported on Windows. With WSL2, install dfx using:

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

#### Rust Installation
To set up Rust on WSL, refer to this [guide on Medium](https://harsimranmaan.medium.com/install-and-setup-rust-development-environment-on-wsl2-dccb4bf63700).

---

### Mac

#### System Requirements
- macOS 12.* Monterey or later.
- **Apple Silicon Users**: Install Rosetta with this command:

  ```bash
  softwareupdate --install-rosetta
  ```

#### Xcode Command Line Tools
Install by running:

```bash
xcode-select --install
```

#### Node.js Installation
Use Homebrew to install Node.js v18 from [Homebrew Formulae](https://formulae.brew.sh/formula/node@18).

#### dfx Installation
Run the following command in your terminal:

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

#### Rust Installation
Refer to this beginner’s [Rust setup guide for Mac](https://medium.com/@Brahmbhatnilay/rust-programming-language-installation-for-beginners-on-windows-and-mac-47bf7fdcbf80).

---

## Resources

### ICP Hackathon Cheatsheet & Developer Tools

- [Developer Tools and Grants](https://github.com/dfinity/grant-rfps/blob/main/requests-for-startups.md)
- [Internet Computer Developer Portal](https://internetcomputer.org/developers)
- [ICP Developer Documentation](https://internetcomputer.org/docs/current/home/?source=nav)
- [Azle 101](https://github.com/Tevin-Isaac/Azle-101)
- [Sample DApps](https://internetcomputer.org/samples?source=nav)
- [ICP Capabilities](https://internetcomputer.org/capabilities)
- [Awesome Internet Computer](https://github.com/dfinity/awesome-internet-computer)
- [Example Projects](https://github.com/dfinity/examples)

### ICP Chain Fusion Resources
- [ICP-EVM Rust Bridge](https://github.com/Stephen-Kimoi/icp-evm-rust-bridge)
- [EVM-RPC Canister](https://github.com/internet-computer-protocol/evm-rpc-canister)
- [Chain Fusion Starter](https://github.com/letmejustputthishere/chain-fusion-starter)
- [ICP Development Environment](https://github.com/dfinity/icp-dev-env/tree/main)
- [Vite React Motoko](https://github.com/rvanasa/vite-react-motoko/tree/evm-rpc)

### Workshop Videos
- [ICP Hub Kenya YouTube Channel](https://www.youtube.com/@ICPHubKenya/playlists)
- [Selected Workshop Videos](https://www.youtube.com/watch?v=utRjGLey-2s&list=PLuhDt1vhGcrepqUIM3NjktD6gdMPWUi_i&index=3)

### Community and Support
- [ICP Discord Community](https://discord.com/invite/5PJMmmETQB)
- [Dfinity Developer Forum](https://forum.dfinity.org/)

### Dacade Course
Create a Dacade account with this [link](https://dacade.org/signup?invite=icpeastafrica&utm_source=icphub&utm_medium=event&utm_campaign=icpeastafrica_2023) to access Internet Computer courses.

---

With these resources and tools, you're all set to start building DApps on the Internet Computer! Happy coding!
