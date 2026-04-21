import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, FileDown, Download, Plus, Trash2, Edit2 } from 'lucide-react';

const ReleaseReadinessApp = () => {
  const [releaseName, setReleaseName] = useState('Q2 Feature Release');
  const [releaseDate, setReleaseDate] = useState('2026-06-30');

  const [teamSignOffs, setTeamSignOffs] = useState([
    { id: 1, team: 'Engineering', owner: 'John Smith', status: 'approved', comment: 'All tests passing' },
    { id: 2, team: 'Product', owner: 'Sarah Chen', status: 'pending', comment: '' },
    { id: 3, team: 'QA', owner: 'Mike Johnson', status: 'approved', comment: 'UAT complete' },
    { id: 4, team: 'Ops/DevOps', owner: 'Lisa Park', status: 'pending', comment: '' },
    { id: 5, team: 'Design', owner: 'Emma Wilson', status: 'approved', comment: 'Design handoff done' },
  ]);

  const [risks, setRisks] = useState([
    { id: 1, risk: 'API rate limiting not tested', severity: 'high', probability: 'medium', mitigation: 'Load testing scheduled for Friday' },
    { id: 2, risk: 'Third-party service dependency', severity: 'medium', probability: 'low', mitigation: 'Fallback plan documented' },
    { id: 3, risk: 'Mobile app compatibility', severity: 'medium', probability: 'medium', mitigation: 'Testing on iOS 14+' },
  ]);

  const [documentation, setDocumentation] = useState([
    { id: 1, item: 'Release notes drafted', completed: true },
    { id: 2, item: 'User documentation updated', completed: true },
    { id: 3, item: 'API documentation updated', completed: false },
    { id: 4, item: 'Runbooks created for ops team', completed: false },
    { id: 5, item: 'Customer communication drafted', completed: true },
    { id: 6, item: 'Training materials prepared', completed: false },
    { id: 7, item: 'Rollback plan documented', completed: true },
  ]);

  // Calculate metrics
  const signOffsApproved = teamSignOffs.filter(s => s.status === 'approved').length;
  const signOffsTotal = teamSignOffs.length;
  const docsCompleted = documentation.filter(d => d.completed).length;
  const docsTotal = documentation.length;
  const overallProgress = Math.round(((signOffsApproved + docsCompleted) / (signOffsTotal + docsTotal)) * 100);

  // Risk scoring
  const severityScore = { low: 1, medium: 2, high: 3 };
  const probScore = { low: 1, medium: 2, high: 3 };
  const totalRiskScore = risks.reduce((acc, r) => acc + (severityScore[r.severity] * probScore[r.probability]), 0);
  const avgRiskScore = (totalRiskScore / risks.length).toFixed(1);

  const toggleSignOff = (id, newStatus) => {
    setTeamSignOffs(teamSignOffs.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const toggleDocumentation = (id) => {
    setDocumentation(documentation.map(d => d.id === id ? { ...d, completed: !d.completed } : d));
  };

  const generateWord = async () => {
    // Note: In a real app, you'd use python-docx via an API
    // For demo, we'll show a success message
    const content = `
RELEASE READINESS REPORT
Release: ${releaseName}
Date: ${releaseDate}

EXECUTIVE SUMMARY
Overall Progress: ${overallProgress}%
Team Sign-offs: ${signOffsApproved}/${signOffsTotal}
Documentation Complete: ${docsCompleted}/${docsTotal}
Risk Level: ${avgRiskScore > 6 ? 'HIGH' : avgRiskScore > 3 ? 'MEDIUM' : 'LOW'}

TEAM SIGN-OFFS
${teamSignOffs.map(s => `${s.team}: ${s.status.toUpperCase()} (${s.owner}) - ${s.comment}`).join('\n')}

RISK ASSESSMENT
${risks.map(r => `Risk: ${r.risk}\nSeverity: ${r.severity} | Probability: ${r.probability}\nMitigation: ${r.mitigation}\n`).join('\n')}

DOCUMENTATION STATUS
${documentation.map(d => `${d.completed ? '✓' : '✗'} ${d.item}`).join('\n')}
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${releaseName.replace(/\s+/g, '_')}_readiness.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generatePDF = () => {
    alert('PDF export would be generated using reportlab or similar. In production, this calls a Python backend.');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'blocked': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRiskColor = (severity) => {
    switch(severity) {
      case 'high': return 'border-l-4 border-red-500 bg-red-50';
      case 'medium': return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-4 border-green-500 bg-green-50';
      default: return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🚀 Release Readiness Dashboard</h1>
          <p className="text-gray-600">Track launch preparations and ensure all teams are ready</p>
        </div>

        {/* Release Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Release Name</label>
              <input
                type="text"
                value={releaseName}
                onChange={(e) => setReleaseName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Release Date</label>
              <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                onClick={generateWord}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <FileDown size={18} /> Export
              </button>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="text-sm text-gray-600 mb-1">Overall Progress</div>
            <div className="text-3xl font-bold text-blue-600">{overallProgress}%</div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="text-sm text-gray-600 mb-1">Team Sign-offs</div>
            <div className="text-3xl font-bold text-green-600">{signOffsApproved}/{signOffsTotal}</div>
            <div className="text-sm text-gray-500 mt-2">Ready to launch</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="text-sm text-gray-600 mb-1">Documentation</div>
            <div className="text-3xl font-bold text-purple-600">{docsCompleted}/{docsTotal}</div>
            <div className="text-sm text-gray-500 mt-2">Items complete</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="text-sm text-gray-600 mb-1">Risk Level</div>
            <div className="text-3xl font-bold text-orange-600">{avgRiskScore}</div>
            <div className="text-sm text-gray-500 mt-2">{avgRiskScore > 6 ? '🔴 HIGH' : avgRiskScore > 3 ? '🟡 MEDIUM' : '🟢 LOW'}</div>
          </div>
        </div>

        {/* Team Sign-offs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-600" /> Team Sign-offs
          </h2>
          <div className="space-y-3">
            {teamSignOffs.map((signoff) => (
              <div key={signoff.id} className={`p-4 rounded-lg ${getStatusColor(signoff.status)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{signoff.team}</span>
                      <span className="text-sm px-2 py-1 bg-white rounded font-medium">{signoff.status.toUpperCase()}</span>
                    </div>
                    <div className="text-sm text-gray-700">Owner: {signoff.owner}</div>
                    {signoff.comment && <div className="text-sm mt-1 italic">{signoff.comment}</div>}
                  </div>
                  <select
                    value={signoff.status}
                    onChange={(e) => toggleSignOff(signoff.id, e.target.value)}
                    className="px-3 py-1 border rounded text-sm font-medium"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="text-orange-600" /> Risk Assessment
          </h2>
          <div className="space-y-3">
            {risks.map((risk) => (
              <div key={risk.id} className={`p-4 rounded-lg ${getRiskColor(risk.severity)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-gray-900">{risk.risk}</div>
                  <div className="flex gap-2 text-xs font-semibold">
                    <span className="px-2 py-1 bg-white rounded">Severity: {risk.severity.toUpperCase()}</span>
                    <span className="px-2 py-1 bg-white rounded">Probability: {risk.probability.toUpperCase()}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Mitigation:</strong> {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Checklist */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Documentation Checklist</h2>
          <div className="space-y-2">
            {documentation.map((doc) => (
              <label key={doc.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={doc.completed}
                  onChange={() => toggleDocumentation(doc.id)}
                  className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className={`ml-3 text-gray-900 ${doc.completed ? 'line-through text-gray-500' : ''}`}>
                  {doc.item}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              {docsCompleted} of {docsTotal} items complete ({Math.round((docsCompleted / docsTotal) * 100)}%)
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📤 Export Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={generateWord}
              className="p-4 border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition text-center"
            >
              <FileDown className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Word Document</div>
              <div className="text-sm text-gray-500">.docx format</div>
            </button>
            <button
              onClick={generatePDF}
              className="p-4 border-2 border-red-300 rounded-lg hover:bg-red-50 transition text-center"
            >
              <Download className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">PDF Report</div>
              <div className="text-sm text-gray-500">High quality</div>
            </button>
            <button
              onClick={() => alert('Copy to Confluence would integrate with Confluence API')}
              className="p-4 border-2 border-purple-300 rounded-lg hover:bg-purple-50 transition text-center"
            >
              <FileDown className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Confluence</div>
              <div className="text-sm text-gray-500">Push to wiki</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseReadinessApp;
