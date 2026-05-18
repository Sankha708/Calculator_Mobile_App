import * as math from 'mathjs';

export class MathEngine {
  private memory: number = 0;

  // Safe evaluation using mathjs
  public evaluateSafe(expression: string, isRadian: boolean = false): string {
    try {
      if (!expression.trim()) return '0';
      
      let processed = this.preprocessFunctions(expression, isRadian);
      
      // Evaluate using math.evaluate
      let result = math.evaluate(processed);

      // Handle floating point precision issues (e.g. 0.1 + 0.2 = 0.30000000000000004)
      if (typeof result === 'number') {
        result = parseFloat(result.toPrecision(12));
      }
      
      return result.toString();
    } catch (error) {
      return "Error";
    }
  }

  private preprocessFunctions(expr: string, isRadian: boolean): string {
    // mathjs natively supports sin, cos, tan, log, etc.
    // By default math.js trigonometric functions expect angles in radians.
    // If we are in degree mode, we convert degrees to radians before calling them.
    let processed = expr;

    if (!isRadian) {
      // Very simplistic replacement for degrees to radians
      processed = processed
        .replace(/sin\(/g, 'sin((pi/180)*')
        .replace(/cos\(/g, 'cos((pi/180)*')
        .replace(/tan\(/g, 'tan((pi/180)*');
    }

    // Replace common aliases
    processed = processed
      .replace(/ln\(/g, 'log(')       // mathjs log is natural log by default
      .replace(/log10\(/g, 'log10(')
      .replace(/π/g, 'pi');
      
    return processed;
  }

  // Memory Functions
  public memoryAdd(val: number) { this.memory += val; }
  public memorySubtract(val: number) { this.memory -= val; }
  public memoryRecall(): number { return this.memory; }
  public memoryClear() { this.memory = 0; }
}

export const mathEngine = new MathEngine();
