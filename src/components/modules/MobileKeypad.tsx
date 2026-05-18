import React, { useState } from 'react';
import { Button, cn } from '../common/Button';
import { useCalculatorStore } from '../../store/calculatorStore';
import { mathEngine } from '../../core/engine/MathEngine';
import { Delete } from 'lucide-react';

export const MobileKeypad: React.FC = () => {
  const { expression, setExpression, setResult, isRadian, toggleRadian } = useCalculatorStore();
  const [isInv, setIsInv] = useState(false);

  // Auto evaluate wrapper
  const evaluate = (expr: string) => {
    if (expr && !['+', '-', '*', '/', '×', '÷', '(', '^'].includes(expr.slice(-1))) {
      const res = mathEngine.evaluateSafe(expr, isRadian);
      if (res && res !== 'Error') setResult(res);
    }
  };

  const handleInput = (val: string) => {
    if (expression === 'Error') {
      setExpression(val);
      evaluate(val);
      return;
    }
    setExpression(expression + val);
    evaluate(expression + val);
  };

  const handleEvaluate = () => {
    const res = mathEngine.evaluateSafe(expression, isRadian);
    setResult(res);
    setExpression(res); 
  };

  const handleDelete = () => {
    const resolvedExpr = expression.slice(0, -1);
    setExpression(resolvedExpr);
    evaluate(resolvedExpr);
    if (!resolvedExpr) setResult('');
  };

  const handleAC = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div className="grid grid-cols-5 gap-3 w-full max-w-md mx-auto">
      {/* Row 1 */}
      <Button variant="scientific" onClick={() => handleInput(isInv ? 'asin(' : 'sin(')}>{isInv ? 'sin⁻¹' : 'sin'}</Button>
      <Button variant="scientific" onClick={() => handleInput(isInv ? 'acos(' : 'cos(')}>{isInv ? 'cos⁻¹' : 'cos'}</Button>
      <Button variant="scientific" onClick={() => handleInput(isInv ? 'atan(' : 'tan(')}>{isInv ? 'tan⁻¹' : 'tan'}</Button>
      <Button variant="scientific" onClick={isRadian ? undefined : toggleRadian} className={cn(isRadian ? 'text-[#f2f2f2]' : 'text-[#a1a1a1]')}>rad</Button>
      <Button variant="scientific" onClick={!isRadian ? undefined : toggleRadian} className={cn(!isRadian ? 'text-[#7a73e6]' : 'text-[#a1a1a1]')}>deg</Button>

      {/* Row 2 */}
      <Button variant="scientific" onClick={() => handleInput('log(')}>log</Button>
      <Button variant="scientific" onClick={() => handleInput('ln(')}>ln</Button>
      <Button variant="scientific" onClick={() => handleInput('(')}>(</Button>
      <Button variant="scientific" onClick={() => handleInput(')')}>)</Button>
      <Button variant="scientific" onClick={() => setIsInv(!isInv)} className={cn(isInv ? 'text-[#f2f2f2]' : 'text-[#a1a1a1]')}>inv</Button>

      {/* Row 3 */}
      <Button variant="scientific" onClick={() => handleInput('!')}>!</Button>
      <Button variant="action" onClick={handleAC}>AC</Button>
      <Button variant="action" onClick={() => handleInput('%')}>%</Button>
      <Button variant="action" onClick={handleDelete}>
        <Delete className="w-[1.2rem] h-[1.2rem] fill-current" />
      </Button>
      <Button variant="operator" onClick={() => handleInput('÷')}>÷</Button>

      {/* Row 4 */}
      <Button variant="scientific" onClick={() => handleInput('^')}>^</Button>
      <Button variant="number" onClick={() => handleInput('7')}>7</Button>
      <Button variant="number" onClick={() => handleInput('8')}>8</Button>
      <Button variant="number" onClick={() => handleInput('9')}>9</Button>
      <Button variant="operator" onClick={() => handleInput('×')}>×</Button>

      {/* Row 5 */}
      <Button variant="scientific" onClick={() => handleInput('√(')}>√</Button>
      <Button variant="number" onClick={() => handleInput('4')}>4</Button>
      <Button variant="number" onClick={() => handleInput('5')}>5</Button>
      <Button variant="number" onClick={() => handleInput('6')}>6</Button>
      <Button variant="operator" onClick={() => handleInput('−')}>−</Button>

      {/* Row 6 */}
      <Button variant="scientific" onClick={() => handleInput('π')}>π</Button>
      <Button variant="number" onClick={() => handleInput('1')}>1</Button>
      <Button variant="number" onClick={() => handleInput('2')}>2</Button>
      <Button variant="number" onClick={() => handleInput('3')}>3</Button>
      <Button variant="operator" onClick={() => handleInput('+')}>+</Button>

      {/* Row 7 */}
      <Button variant="scientific" onClick={() => handleInput('e')}>e</Button>
      <Button variant="number" onClick={() => handleInput('00')}>00</Button>
      <Button variant="number" onClick={() => handleInput('0')}>0</Button>
      <Button variant="number" onClick={() => handleInput('.')}>.</Button>
      <Button variant="equals" onClick={handleEvaluate}>=</Button>
    </div>
  );
};
