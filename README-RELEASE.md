# Release Readiness Dashboard

A beautiful, interactive web application for tracking product launch readiness. Perfect for TPMs, Product Managers, and Release Managers.

## ✨ Features

🎯 **Real-time Progress Tracking**
- Overall launch readiness at a glance
- Team sign-off status tracking
- Documentation completion checklist
- Risk assessment and mitigation tracking

👥 **Team Management**
- Track sign-offs from Engineering, Product, QA, Ops, Design
- Assign owners to each team
- Add comments and updates
- Visual status indicators (Approved/Pending/Blocked)

⚠️ **Risk Assessment**
- Identify launch risks
- Score by severity × probability
- Track mitigation strategies
- Real-time risk level indicator

📋 **Documentation Checklist**
- Pre-launch documentation requirements
- Release notes, runbooks, guides
- Training materials and rollback plans
- Progress tracking

📤 **Export Options**
- **Word Documents** (.docx) - Professional reports
- **PDF Reports** - High-quality formatted output
- **Confluence Integration** - Push directly to wiki (planned)

## 🚀 Quick Start

### Option 1: Run Standalone (Simplest)

1. **Open the web app:**
   ```bash
   # Just open in your browser
   open release-readiness.html
   # or
   start release-readiness.html
   ```

2. **That's it!** The app works in your browser with no backend needed.

3. **Export reports:**
   - Click "Export" button to download as text
   - In production, use the Python backend for Word/PDF

### Option 2: Full Stack (With Exports)

1. **Install dependencies:**
   ```bash
   pip install -r requirements-release.txt
   ```

2. **Run export server:**
   ```bash
   python export_server.py
   ```

3. **Open the web app:**
   ```bash
   open release-readiness.html
   ```

4. **Click export buttons** to generate Word/PDF reports

## 📊 What It Tracks

### Team Sign-offs
- Engineering: Code completion, testing, deployment readiness
- Product: Feature validation, requirements confirmation
- QA: Test coverage, UAT completion
- Ops/DevOps: Infrastructure ready, monitoring configured
- Design: Design handoff, CSS/assets complete

### Risk Assessment
- Technical risks (API capacity, dependencies, compatibility)
- Operational risks (monitoring, failover, escalation)
- Business risks (market timing, dependencies)
- Each risk scored by severity × probability

### Documentation
- Release notes and changelog
- User-facing documentation
- API documentation
- Runbooks for ops team
- Training materials
- Rollback procedures

## 🎨 Beautiful UI

- **Modern design** with Tailwind CSS
- **Real-time metrics** showing progress
- **Color-coded status** (🟢 Ready, 🟡 In Progress, 🔴 Blocked)
- **Interactive elements** - toggle checkboxes, update status
- **Responsive design** - works on desktop and tablet

## 💾 Export Formats

### Word Document (.docx)
- Professional formatting
- Tables for all data
- Easy to share and edit
- Perfect for stakeholder reports

### PDF Report
- High-quality formatting
- Color-coded sections
- Print-friendly
- Immutable record-keeping

### Data Structure
```json
{
  "releaseName": "Q2 Feature Launch",
  "releaseDate": "2026-06-30",
  "teamSignOffs": [
    {
      "team": "Engineering",
      "owner": "John Smith",
      "status": "approved",
      "comment": "All tests passing"
    }
  ],
  "risks": [
    {
      "risk": "API rate limiting",
      "severity": "high",
      "probability": "medium",
      "mitigation": "Load testing scheduled"
    }
  ],
  "documentation": [
    {
      "item": "Release notes drafted",
      "completed": true
    }
  ]
}
```

## 🛠️ For Developers

### Project Structure
```
release-readiness-app/
├── release-readiness.html      # Main web app (standalone)
├── release-readiness-app.jsx   # React component
├── export_server.py            # Word/PDF export backend
├── requirements-release.txt    # Python dependencies
├── README-RELEASE.md          # This file
└── LICENSE                     # MIT license
```

### Customization

**Add more team sign-offs:**
Edit the `teamSignOffs` state in `release-readiness.html`:
```javascript
const [teamSignOffs, setTeamSignOffs] = useState([
  { id: 1, team: 'Your Team', owner: 'Name', status: 'pending', comment: '' },
  // Add more teams...
]);
```

**Add new documentation items:**
Edit the `documentation` state:
```javascript
const [documentation, setDocumentation] = useState([
  { id: 1, item: 'Your checklist item', completed: false },
  // Add more items...
]);
```

**Customize colors:**
Change Tailwind classes in the HTML:
- Border colors: `border-blue-500`, `border-green-500`, etc.
- Background colors: `bg-blue-50`, `bg-green-50`, etc.
- Text colors: `text-blue-600`, `text-green-600`, etc.

## 📈 For TPM Portfolios

This project demonstrates:

✅ **Product thinking** - Solves real launch management pain point  
✅ **Technical skills** - React, Tailwind CSS, Python, API integration  
✅ **Design sense** - Beautiful, usable UI  
✅ **TPM knowledge** - Understands what makes launches successful  
✅ **Execution** - Production-ready code with documentation  

### Portfolio Talking Points

- "Built an interactive dashboard to track launch readiness across 5 teams"
- "Integrated risk assessment to identify critical blockers pre-launch"
- "Generated automated reports in Word/PDF for stakeholder updates"
- "Real-time progress tracking reduced launch day surprises by X%"
- "Used by [team] to successfully launch [feature] with zero critical issues"

## 🚀 Deployment

### Vercel (Easiest)
```bash
# The HTML file deploys as static site
vercel
```

### GitHub Pages
```bash
# Push to gh-pages branch
git subtree push --prefix . origin gh-pages
```

### Heroku (With backend)
```bash
# Requires Procfile for export server
heroku create
git push heroku main
```

## 📚 Future Enhancements

- [ ] Database integration for persistence
- [ ] Real-time collaboration (multiple users)
- [ ] Slack notifications for sign-off requests
- [ ] Calendar integration (auto-add launch date)
- [ ] Historical tracking (compare releases)
- [ ] Automated risk detection from code/issues
- [ ] Integration with project management tools
- [ ] Email reports to stakeholders
- [ ] Custom templates per org/product

## 🎯 Use Cases

**Product Launch Day**
- Central hub for all launch information
- Quick status checks for executives
- Export final readiness report

**Cross-functional Coordination**
- Engineering team uploads test results
- Ops team confirms infrastructure ready
- Product validates feature scope

**Stakeholder Communication**
- Export reports for board meetings
- Share readiness status via Confluence
- Document decisions for post-launch review

**Post-Launch Retrospective**
- Review what actually shipped vs. planned
- Track which risks manifested
- Improve process for next launch

## 💡 Tips for TPMs

1. **Start early** - Fill this out 2 weeks before launch
2. **Get sign-offs async** - Don't wait for meetings
3. **Update daily** - Keep status fresh
4. **Export weekly** - Share progress with stakeholders
5. **Track risks** - Use this to drive mitigation conversations
6. **Document decisions** - Export final version for records

## License

MIT - Use freely in your TPM work

## Questions?

Contact: jessica.manzo3@gmail.com

---

**Built for TPMs who care about launches that actually ship successfully** 🚀

