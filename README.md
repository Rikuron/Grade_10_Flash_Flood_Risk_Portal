# Flash Flood Risk Portal

A web application that uses mathematical modeling to predict flash flood disaster risk levels, designed to help emergency responders prioritize evacuations and reduce casualties.

## 🌊 About

Flash floods are sudden, dangerous events that can cause severe damage within minutes or hours. Traditional assessment methods rely on time-consuming interviews with residents, which can delay critical evacuation decisions.

This portal implements the **Disaster Risk Formula** to quickly calculate risk levels based on four key variables:
- **H** - Hazard Rating (1-5)
- **V** - Vulnerability Rating (1-5) 
- **E** - Exposure Level (1-5)
- **C** - Capacity (1-5)

**Formula**: `Disaster Risk = (H × V × E) / C`

## ✨ Features

- **Interactive Risk Calculator**: User-friendly form with validation for input values (1-5 only)
- **Real-time Results**: Instant risk level classification
- **Educational Content**: Detailed scoring criteria for each variable
- **Mobile Responsive**: Optimized layout for all device sizes
- **Research-based**: Built on established disaster risk assessment principles

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd grade-10-research
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.0 (App Router)
- **UI**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel-ready

## 📱 Usage

1. **Navigate to the homepage** and review the variable definitions
2. **Input values** for each parameter (H, V, E, C) using the 1-5 scale
3. **Click Calculate** to see your disaster risk score and classification
4. **Review the criteria** to understand how each variable is scored

### Risk Level Classifications
- **Very Low Risk** (< 1): Safe, no immediate concern
- **Low Risk** (1-3): Minimal impact expected
- **Moderate Risk** (3-10): Some effects likely, take precautions
- **High Risk** (10-35): Significant impact expected, consider evacuation
- **Very High Risk** (> 35): Extreme danger, evacuate immediately

## 🎓 Research Background

This project was developed by Grade 10 student researchers from **Iligan City East National High School** as part of their research study:

> **"A Mathematical Approach to Disaster Risk Prediction: Implementing the Disaster Risk Formula in a User-Centered Website"**

The goal is to accelerate data collection for flash flood prevention organizations and help government agencies make faster, more informed evacuation decisions during emergency situations.

## 👥 Team

### Student Researchers
- Rey Zander O. Pabroquiz
- Zayred Troy A. Jariol  
- Lyndon Cristoff B. Eugenio

### Website Developer
- Cristane Josh B. Eugenio

### Research Supervisor & Qualified Scientist
- Honey Ritzel G. Barillo

## 🔧 Development

### Project Structure

src/    <br>
├── app/    <br>
│   ├── components/     # Reusable UI components    <br>
│   ├── sections/       # Page sections (header, hero) <br>
│   ├── utils/          # Data and content files    <br>
│   ├── about/          # About page    <br>
│   ├── layout.tsx      # Root layout   <br>
│   └── page.tsx        # Homepage  <br>

### Available Scripts

npm install
# or
yarn install
# or
pnpm installdevelopment server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js), which seamlessly handles Next.js applications:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 📄 License

This project was developed for educational and research purposes.

## 🤝 Contributing

This is a research project developed by high school students. For academic purposes or research collaboration, please contact the research supervisor.

---

**Note**: This tool is designed to supplement, not replace, professional emergency management procedures and should be used in conjunction with established disaster response protocols.